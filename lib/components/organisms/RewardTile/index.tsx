import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, Icon, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

type RewardTileProps = {
  tile: Tile;
};

const RewardTile: React.FC<RewardTileProps> & {
  Image: typeof RewardTileImage;
  Title: typeof RewardTileTitle;
  Description: typeof RewardTileDescription;
  Points: typeof RewardTilePoints;
} = ({ tile }) => {
  const { theme } = useWllSdk();
  return (
    <BaseTile tile={tile}>
      <RewardTile.Image />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <RewardTile.Title />
          <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
        </View>
        <RewardTile.Description />
        <RewardTile.Points />
      </View>
    </BaseTile>
  );
};

const RewardTileImage: React.FC = () => {
  const { configuration } = useTileContext();
  const reward = configuration as RewardTileConfig;

  if (!reward?.pictureUrl) return null;
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: reward.pictureUrl }} style={styles.image} />
    </View>
  );
};

const RewardTileTitle: React.FC = () => {
  const { configuration } = useTileContext();
  const reward = configuration as RewardTileConfig;

  if (!reward?.name) return null;
  return (
    <Text variant="title" ellipsizeMode="tail" numberOfLines={1}>
      {reward.name}
    </Text>
  );
};

const RewardTileDescription: React.FC = () => {
  const { configuration } = useTileContext();
  const reward = configuration as RewardTileConfig;

  if (!reward?.summary) return null;
  return <Text variant="body">{reward.summary}</Text>;
};

const RewardTilePoints: React.FC = () => {
  const { configuration } = useTileContext();
  const { theme } = useWllSdk();
  const reward = configuration as RewardTileConfig;

  const calculatedPoints =
    reward?.price !== undefined
      ? reward.price * Number(reward.pointsMultiplier)
      : null;

  const styles = StyleSheet.create({
    suffix: createResponsiveStyle({
      fontSize: [14, 14, 18],
      color: theme.primary,
    }),
    pointsWithSuffix: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  if (reward?.price === 0 || !reward.showPrice || calculatedPoints === null)
    return null;
  return (
    <Text variant="caption">
      {reward.pointsPrefix}
      <View style={styles.pointsWithSuffix}>
        {calculatedPoints}
        <Text style={styles.suffix}>{reward.pointsSuffix}</Text>
      </View>
    </Text>
  );
};

const styles = StyleSheet.create({
  imageContainer: createResponsiveStyle({
    width: '100%',
    flexBasis: '50%',
    marginBottom: [8, 8, 12],
  }),
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: createResponsiveStyle({
    paddingHorizontal: [8, 8, 12],
    flex: 1,
  }),
  row: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
  points: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

RewardTile.Image = RewardTileImage;
RewardTile.Title = RewardTileTitle;
RewardTile.Description = RewardTileDescription;
RewardTile.Points = RewardTilePoints;

export default RewardTile;
