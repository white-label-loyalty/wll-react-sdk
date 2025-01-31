import { renderHook } from '@testing-library/react';
import { useNavigation } from '../hooks/useNavigationHandler';
import { NavigationConfig } from '../types/navigation';
import { CTALinkTarget } from '../types/tile';
import { parseNavigationLink } from '../utils/navigationHelpers';

jest.mock('../utils/navigationHelpers', () => ({
  parseNavigationLink: jest.fn(),
}));

describe('useNavigation', () => {
  const mockNavigationHandler = jest.fn();

  const mockConfig: NavigationConfig = {
    navigationHandlers: {
      internal: mockNavigationHandler,
      external: mockNavigationHandler,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call navigation handler with correct params for SAME_FRAME target', () => {
    (parseNavigationLink as jest.Mock).mockReturnValue({
      type: 'internal',
      target: '/some-path',
    });

    const { result } = renderHook(() => useNavigation(mockConfig));

    result.current('/some-link', CTALinkTarget.sameWindow);

    expect(parseNavigationLink).toHaveBeenCalledWith('/some-link');
    expect(mockNavigationHandler).toHaveBeenCalledWith({
      target: '/some-path',
      windowTarget: '_self',
    });
  });

  it('should call navigation handler with correct params for NEW_TAB target', () => {
    (parseNavigationLink as jest.Mock).mockReturnValue({
      type: 'external',
      target: 'https://example.com',
    });

    const { result } = renderHook(() => useNavigation(mockConfig));

    result.current('/external-link', CTALinkTarget.newWindow);

    expect(parseNavigationLink).toHaveBeenCalledWith('/external-link');
    expect(mockNavigationHandler).toHaveBeenCalledWith({
      target: 'https://example.com',
      windowTarget: '_blank',
    });
  });

  it('should not call navigation handler if handler for type does not exist', () => {
    (parseNavigationLink as jest.Mock).mockReturnValue({
      type: 'unknown',
      target: '/some-path',
    });

    const { result } = renderHook(() => useNavigation(mockConfig));

    result.current('/some-link', CTALinkTarget.sameWindow);

    expect(parseNavigationLink).toHaveBeenCalledWith('/some-link');
    expect(mockNavigationHandler).not.toHaveBeenCalled();
  });

  it('should handle empty config case', () => {
    (parseNavigationLink as jest.Mock).mockReturnValue({
      type: 'internal',
      target: '/some-path',
    });

    const emptyConfig: NavigationConfig = {};
    const { result } = renderHook(() => useNavigation(emptyConfig));

    result.current('/some-link', CTALinkTarget.sameWindow);

    expect(parseNavigationLink).toHaveBeenCalledWith('/some-link');
    expect(mockNavigationHandler).not.toHaveBeenCalled();
  });
});
