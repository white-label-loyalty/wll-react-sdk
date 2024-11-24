import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { RewardCategoryTileConfig, Tile } from '../../../types/tile';
import { getResponsiveValue } from '../../../utils/responsiveHelper';
import { BaseTile, ProgressiveImage, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

type RewardCategoryTileProps = {
  tile: Tile;
};

const RewardCategoryTile: React.FC<RewardCategoryTileProps> & {
  Header: typeof RewardCategoryHeader;
  Background: typeof RewardCategoryBackground;
} = ({ tile }) => {
  if (!tile) return null;

  return (
    <BaseTile tile={tile}>
      <RewardCategoryTile.Header />
      <RewardCategoryTile.Background />
    </BaseTile>
  );
};

const RewardCategoryHeader: React.FC = () => {
  const { theme } = useWllSdk();
  const { configuration } = useTileContext();
  const { showName, name } = configuration as RewardCategoryTileConfig;
  const { isDesktop, isTablet } = useResponsive();

  if (!showName || !name) return null;

  const dynamicStyles = StyleSheet.create({
    headerText: {
      fontSize: getResponsiveValue(16, 12, isDesktop, isTablet),
      paddingHorizontal: getResponsiveValue(40, 20, isDesktop, isTablet),
    },
  });

  return (
    <View style={[styles.header, { backgroundColor: theme.primary }]}>
      <Text
        style={[dynamicStyles.headerText, { color: theme.primaryText }]}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
};

const RewardCategoryBackground: React.FC = () => {
  const { configuration } = useTileContext();
  const { artworkUrl } = configuration as RewardCategoryTileConfig;

  if (!artworkUrl) return null;

  return (
    <ProgressiveImage source={{ uri: artworkUrl }} style={styles.background} />
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

RewardCategoryTile.Header = RewardCategoryHeader;
RewardCategoryTile.Background = RewardCategoryBackground;

export default RewardCategoryTile;
