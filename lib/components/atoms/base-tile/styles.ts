import { StyleSheet } from 'react-native';
import { useTileContext } from '.';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useTileSize } from '../../../hooks/use-tile-size';
import { ContentTileConfig } from '../../../types/tile';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const useBaseTileStyles = () => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();
  const { isHalfSize } = useTileSize(tile);
  const { artworkUrl, title, body } = tile.configuration as ContentTileConfig;

  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
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
      display: 'flex',
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
      width: '100%',
      objectFit: 'cover',
      flexBasis: !isHalfSize && title && body ? '50%' : '100%',
      height: isHalfSize ? '100%' : undefined,
    },
  });
};
