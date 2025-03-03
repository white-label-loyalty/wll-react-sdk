import { StyleSheet } from 'react-native';
import { useTileContext } from '.';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const baseStyles = StyleSheet.create({
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
    });
  }

  const sizeInfo = useTileSize(tileContext);
  const isHalfSize = sizeInfo?.isHalfSize || false;
  const { artworkUrl, title, body } =
    tileContext.configuration as ContentTileConfig;

  return StyleSheet.create({
    container: {
      ...baseStyles.container,
      backgroundColor: theme.surface,
      aspectRatio: isHalfSize ? 2 : 1,
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
  });
};
