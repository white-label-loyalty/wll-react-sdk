import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, Icon, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useSectionContext } from '../Section';

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
  const { reward } = configuration as RewardTileConfig;

  if (!reward?.pictureUrl) return null;
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: reward?.pictureUrl }} style={styles.image} />
    </View>
  );
};

const RewardTileTitle: React.FC = () => {
  const { configuration } = useTileContext();
  const { reward } = configuration as RewardTileConfig;

  if (!reward?.name) return null;
  return (
    <Text variant="title" ellipsizeMode="tail" numberOfLines={1}>
      {reward?.name}
    </Text>
  );
};

const RewardTileDescription: React.FC = () => {
  const { configuration } = useTileContext();
  const { reward } = configuration as RewardTileConfig;

  if (!reward?.description) return null;
  return <Text variant="body">{reward?.description}</Text>;
};

const RewardTilePoints: React.FC = () => {
  const { sectionData } = useSectionContext();
  const { configuration } = useTileContext();
  const { theme } = useWllSdk();
  const { reward } = configuration as RewardTileConfig;

  const effectiveMultiplier = sectionData?.pointsMultiplier ?? 1;
  const effectivePrefix = sectionData?.pointsPrefix ?? '';
  const effectiveSuffix = sectionData?.pointsSuffix ?? 'pts';
  const calculatedPoints =
    reward?.price !== undefined ? reward.price * effectiveMultiplier : null;
  if (reward?.price === 0) return null;
  return (
    <Text
      style={[
        styles.points,
        {
          color: theme.primary,
        },
      ]}
    >
      {effectivePrefix}
      {calculatedPoints}
      {effectiveSuffix}
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
