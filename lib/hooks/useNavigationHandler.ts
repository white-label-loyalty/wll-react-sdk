import { useCallback } from 'react';
import { NavigationConfig } from '../types/navigation';
import { CTALinkTarget } from '../types/tile';
import { parseNavigationLink } from '../utils/navigationHelpers';

export const useNavigation = (config: NavigationConfig) => {
  const handleNavigation = useCallback(
    async (link: string, ctaTarget: CTALinkTarget): Promise<void> => {
      const { type, target } = parseNavigationLink(link);
      const windowTarget = ctaTarget === 'SAME_FRAME' ? '_self' : '_blank';

      if (config.navigationHandlers?.[type]) {
        return Promise.resolve(config.navigationHandlers[type]({ target, windowTarget }));
      }
      return Promise.resolve();
    },
    [config]
  );

  return handleNavigation;
};
