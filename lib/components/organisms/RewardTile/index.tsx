import * as React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Icon, ProgressiveImage, RowHeader, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

type RewardTileProps = {
  tile: Tile;
};

const RewardTile: React.FC<RewardTileProps> & {
  Media: typeof RewardTileMedia;
  Title: typeof RewardTileTitle;
  Description: typeof RewardTileDescription;
  Points: typeof RewardTilePoints;
  Chevron: typeof RewardTileChevron;
  Content: typeof RewardTileContent;
} = ({ tile }) => {
  return (
    <BaseTile tile={tile}>
      <RewardTile.Media />
      <RewardTile.Content>
        <RowHeader>
          <RewardTile.Title />
          <RewardTile.Chevron />
        </RowHeader>
        <RewardTile.Description />
        <RewardTile.Points />
      </RewardTile.Content>
    </BaseTile>
  );
};

const RewardTileMedia: React.FC = () => {
  const styles = useRewardTileStyles();
  const { configuration } = useTileContext();
  const reward = configuration as RewardTileConfig;

  if (!reward?.pictureUrl) return null;
  return (
    <View style={styles.imageContainer}>
      <ProgressiveImage
        source={{ uri: reward.pictureUrl }}
        style={styles.image}
      />
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
  const styles = useRewardTileStyles();
  const { configuration } = useTileContext();
  const { theme } = useWllSdk();
  const reward = configuration as RewardTileConfig;

  const calculatedPoints =
    reward?.price !== undefined
      ? reward.price * (Number(reward.pointsMultiplier) || 1)
      : null;

  if (reward?.price === 0 || !reward.showPrice || calculatedPoints === null) {
    return null;
  }

  return (
    <Text variant="caption" style={styles.footer}>
      {reward.pointsPrefix}
      <View style={styles.pointsContainer}>
        {calculatedPoints}
        <Text style={[styles.suffix, { color: theme.primary }]}>
          {reward.pointsSuffix}
        </Text>
      </View>
    </Text>
  );
};

const RewardTileContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const styles = useRewardTileStyles();

  return <View style={styles.content}>{children}</View>;
};

const RewardTileChevron: React.FC = () => {
  const { theme } = useWllSdk();
  return <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />;
};

RewardTile.Media = RewardTileMedia;
RewardTile.Title = RewardTileTitle;
RewardTile.Description = RewardTileDescription;
RewardTile.Points = RewardTilePoints;
RewardTile.Chevron = RewardTileChevron;
RewardTile.Content = RewardTileContent;

export default RewardTile;
