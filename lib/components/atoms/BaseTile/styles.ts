import { StyleSheet } from 'react-native';
import { useTileContext } from '.';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

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
      borderRadius: getResponsiveValue(
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
      marginBottom: getResponsiveValue(8, 4, isDesktop, isTablet),
      marginTop:
        !isHalfSize && artworkUrl
          ? getResponsiveValue(12, 8, isDesktop, isTablet)
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
