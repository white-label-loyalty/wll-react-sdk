import { StyleSheet } from 'react-native';
import { useTileContext } from '.';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const baseStyles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    display: 'flex',
  },
  media: {
    width: '100%',
    objectFit: 'cover',
  },
});

/**
 * Custom hook that returns the styles for the BaseTile component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the BaseTile component
 */
export const useBaseTileStyles = () => {
  const tileContext = useTileContext();
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();

  if (!tileContext || !tileContext.configuration) {
    return StyleSheet.create({
      container: baseStyles.container,
      content: baseStyles.content,
      header: {
        marginBottom: 0,
        marginTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      media: baseStyles.media,
      lockOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
      },
    });
  }

  const sizeInfo = useTileSize(tileContext);
  const isHalfSize = sizeInfo?.isHalfSize || false;
  const { artworkUrl, title, body } =
    tileContext.configuration as ContentTileConfig;
  // Access showDetails safely only for Reward tiles to avoid type errors on ContentTileConfig
  const rewardShowDetails: boolean | undefined =
    tileContext.type === 'REWARD'
      ? (tileContext.configuration as unknown as { showDetails?: boolean })
          .showDetails
      : undefined;

  // In Reward tiles that show details (title, summary, points), the content height
  // can exceed a square aspect ratio. To prevent clipping (e.g., points cut off in
  // TwoPerRow), allow the container to naturally size and do not enforce aspectRatio.
  const isRewardWithDetails =
    tileContext.type === 'REWARD' && rewardShowDetails !== false;

  return StyleSheet.create({
    container: {
      ...baseStyles.container,
      backgroundColor: theme.surface,
      // Allow natural height for reward tiles with details; keep the aspect ratio otherwise
      ...(isRewardWithDetails
        ? { height: undefined }
        : { aspectRatio: isHalfSize ? 2 : 1, height: '100%' as const }),
      borderRadius: useResponsiveValue(
        theme.sizes.borderRadiusLg,
        theme.sizes.borderRadiusSm,
        isDesktop,
        isTablet
      ),
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      ...baseStyles.content,
      justifyContent: 'center',
      height: !artworkUrl ? '100%' : undefined,
    },
    header: {
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
      marginTop:
        !isHalfSize && artworkUrl
          ? useResponsiveValue(
              theme.sizes.sm,
              theme.sizes.xxs,
              isDesktop,
              isTablet
            )
          : undefined,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: isHalfSize ? 'center' : undefined,
    },
    media: {
      ...baseStyles.media,
      flexBasis: !isHalfSize && title && body ? '50%' : '100%',
      height: isHalfSize ? '100%' : undefined,
    },
    lockOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
    },
  });
};
