import * as React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardCategoryTileConfig, Tile } from '../../../types/tile';
import { BaseTile, ProgressiveImage, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardCategoryTileStyles } from './styles';

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
  const styles = useRewardCategoryTileStyles();
  const { theme } = useWllSdk();
  const { configuration } = useTileContext();
  const { showName, name } = configuration as RewardCategoryTileConfig;

  if (!showName || !name) return null;

  return (
    <View style={[styles.header, { backgroundColor: theme.primary }]}>
      <Text
        style={[styles.headerText, { color: theme.primaryText }]}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
};

const RewardCategoryBackground: React.FC = () => {
  const styles = useRewardCategoryTileStyles();
  const { configuration } = useTileContext();
  const { artworkUrl } = configuration as RewardCategoryTileConfig;

  if (!artworkUrl) return null;

  return (
    <ProgressiveImage source={{ uri: artworkUrl }} style={styles.background} />
  );
};

RewardCategoryTile.Header = RewardCategoryHeader;
RewardCategoryTile.Background = RewardCategoryBackground;

export default RewardCategoryTile;
