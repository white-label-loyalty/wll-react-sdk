import { renderHook } from '@testing-library/react';
import { Platform } from 'react-native';
import {
  SMALL_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
} from '../constants/responsive';
import {
  getResponsiveValue,
  useResponsiveValue,
} from '../utils/responsiveHelper';

const mockWindowWidth = jest.fn();
const mockDimensionsGet = jest.fn();

// Mock Platform.OS
jest.mock('react-native', () => ({
  Platform: {
    OS: 'web',
  },
  Dimensions: {
    get: () => ({ width: mockDimensionsGet() }),
  },
}));

Object.defineProperty(window, 'innerWidth', {
  configurable: true,
  get: () => mockWindowWidth(),
});

describe('getResponsiveValue', () => {
  const desktopValue = 100;
  const mobileValue = 50;
  const tabletValue = 75;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('on web platform', () => {
    beforeAll(() => {
      Platform.OS = 'web';
    });

    it('returns desktop value when screen is large', () => {
      mockWindowWidth.mockReturnValue(TABLET_SCREEN_WIDTH + 300);
      const result = getResponsiveValue(desktopValue, mobileValue, true, false);
      expect(result).toBe(desktopValue);
    });

    it('returns tablet value when screen is tablet-sized', () => {
      mockWindowWidth.mockReturnValue(TABLET_SCREEN_WIDTH);
      const result = getResponsiveValue(desktopValue, mobileValue, true, true);
      expect(result).toBe(tabletValue);
    });

    it('returns mobile value when screen is small', () => {
      mockWindowWidth.mockReturnValue(SMALL_SCREEN_WIDTH);
      const result = getResponsiveValue(
        desktopValue,
        mobileValue,
        false,
        false
      );
      expect(result).toBe(mobileValue);
    });

    it('interpolates between tablet and desktop values', () => {
      mockWindowWidth.mockReturnValue(TABLET_SCREEN_WIDTH + 150);
      const result = getResponsiveValue(desktopValue, mobileValue, true, true);
      expect(result).toBe(
        Math.round(tabletValue + (desktopValue - tabletValue) * 0.5)
      );
    });

    it('interpolates between mobile and tablet values', () => {
      const midPoint = (TABLET_SCREEN_WIDTH + SMALL_SCREEN_WIDTH) / 2;
      mockWindowWidth.mockReturnValue(midPoint);
      const result = getResponsiveValue(desktopValue, mobileValue, false, true);
      expect(result).toBe(
        Math.round(mobileValue + (tabletValue - mobileValue) * 0.5)
      );
    });
  });
});

describe('useResponsiveValue', () => {
  const desktopValue = 100;
  const mobileValue = 50;

  beforeEach(() => {
    jest.clearAllMocks();
    Platform.OS = 'web';
  });

  it('initializes with correct value based on window width', () => {
    mockWindowWidth.mockReturnValue(TABLET_SCREEN_WIDTH);
    const { result } = renderHook(() =>
      useResponsiveValue(desktopValue, mobileValue, true, true)
    );
    expect(result.current).toBe(75); // tabletValue
  });

  it('cleans up resize listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() =>
      useResponsiveValue(desktopValue, mobileValue, true, true)
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });

  it('does not add resize listener on native platforms', () => {
    Platform.OS = 'ios';
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

    renderHook(() => useResponsiveValue(desktopValue, mobileValue, true, true));

    expect(addEventListenerSpy).not.toHaveBeenCalled();
  });
});
