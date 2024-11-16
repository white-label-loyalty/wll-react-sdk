import { useCallback } from 'react';
import { NavigationConfig } from '../types/navigation';
import { CTALinkTarget } from '../types/tile';
import { parseNavigationLink } from '../utils/navigationHelpers';

export const useNavigation = (config: NavigationConfig) => {
  const handleNavigation = useCallback(
    (link: string, ctaTarget: CTALinkTarget) => {
      const { type, target } = parseNavigationLink(link);
      const windowTarget = ctaTarget === 'SAME_FRAME' ? '_self' : '_blank';

      if (config.navigationHandlers?.[type]) {
        return config.navigationHandlers[type]({ target, windowTarget });
      }
    },
    [config]
  );

  return handleNavigation;
};
