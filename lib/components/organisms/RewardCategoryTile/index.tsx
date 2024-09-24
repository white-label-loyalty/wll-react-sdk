import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardCategoryTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

type RewardCategoryTileProps = {
  tile: Tile;
};

const RewardCategoryTile: React.FC<RewardCategoryTileProps> & {
  Overlay: typeof RewardCategoryTileOverlay;
  Image: typeof RewardCategoryTileImage;
} = ({ tile }) => {
  const { configuration } = tile;
  const { rewardCategory } = configuration as RewardCategoryTileConfig;

  if (!rewardCategory) return null;

  return (
    <BaseTile tile={tile}>
      <RewardCategoryTileOverlay />
      <RewardCategoryTileImage />
    </BaseTile>
  );
};

const RewardCategoryTileOverlay: React.FC = () => {
  const { theme } = useWllSdk();
  const { configuration } = useTileContext();
  const { allowDecorationOverlay, rewardCategory } =
    configuration as RewardCategoryTileConfig;
  const { name } = rewardCategory || {};

  if (!allowDecorationOverlay || !name) return null;

  return (
    <View style={[styles.overlay, { backgroundColor: theme.primary }]}>
      <Text
        style={[styles.overlayText, { color: theme.primaryText }]}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
};

const RewardCategoryTileImage: React.FC = () => {
  const { configuration } = useTileContext();
  const { rewardCategory } = configuration as RewardCategoryTileConfig;
  const { pictureUrl } = rewardCategory || {};

  if (!pictureUrl) return null;

  return (
    <Image
      source={{ uri: pictureUrl }}
      style={styles.image}
      resizeMode="cover"
      onError={(error) => console.error('Image loading error:', error)}
    />
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayText: {
    fontSize: 16,
    paddingHorizontal: 30,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

RewardCategoryTile.Overlay = RewardCategoryTileOverlay;
RewardCategoryTile.Image = RewardCategoryTileImage;

export default RewardCategoryTile;
