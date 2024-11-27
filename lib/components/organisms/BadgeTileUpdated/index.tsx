import { LockKeyholeIcon } from 'lucide-react';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { ImagePropsNoSource } from '../../../types/common';
import { BadgeTileConfig, BadgeTileType, Tile } from '../../../types/tile';
import { getStateColor, shouldDesaturate } from '../../../utils/themeHelpers';
import { BaseTile, Content, ProgressiveImage, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';

type BadgeTileProps = {
  tile: Tile;
};

type BadgeTileMediaProps = ImagePropsNoSource & {
  children?: React.ReactNode;
};

type BadgeTileComponent = FC<BadgeTileProps> & {
  Media: FC<BadgeTileMediaProps>;
  Content: FC;
  Title: FC;
  Description: FC;
  DateEarned: FC;
  Status: FC;
};

const BadgeTileInner: FC<BadgeTileProps> = ({ tile }) => {
  const styles = useBadgeTileStyles();
  if (!tile) return null;

  return (
    <BaseTile tile={tile}>
      <View style={styles.container}>
        <BadgeTile.Media>
          <BadgeTile.Status />
        </BadgeTile.Media>
        <Content justify="between" align="start">
          <View>
            <BadgeTile.Title />
            <BadgeTile.Description />
          </View>
          <BadgeTile.DateEarned />
        </Content>
      </View>
    </BaseTile>
  );
};

const BadgeTileMedia: FC<BadgeTileMediaProps> = ({ children, ...props }) => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, artworkUrl, emptyBadgeArtworkUrl } = configuration;

  const displayUrl = count === 0 ? emptyBadgeArtworkUrl : artworkUrl;
  if (!displayUrl) return null;

  return (
    <View style={styles.header}>
      <ProgressiveImage
        {...props}
        source={{ uri: displayUrl }}
        style={styles.image}
        resizeMode="contain"
        isDesaturated={shouldDesaturate(type, count)}
      />
      {children}
    </View>
  );
};

const BadgeTileTitle: FC = () => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, name, emptyBadgeMessage } = configuration;

  const displayText = count === 0 ? emptyBadgeMessage : name;
  if (!displayText) return null;

  return (
    <View>
      <Text
        variant="title"
        style={styles.titleText}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {displayText}
      </Text>
    </View>
  );
};

const BadgeTileDescription: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, description } = configuration;

  if (count === 0 || !description) return null;

  return (
    <Text variant="body" numberOfLines={2} ellipsizeMode="tail">
      {description}
    </Text>
  );
};

const BadgeTileDateEarned: FC = () => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, awardedDatePrefix, createdAt, badgeNotEarnedMessage } =
    configuration;
  const { theme } = useWllSdk();

  const backgroundColor = getStateColor(
    theme.alphaDerivedPrimary[20],
    type,
    count
  );
  const containerStyle = [styles.dateEarnedContainer, { backgroundColor }];

  if (type === BadgeTileType.Latest && count === 0) {
    return null;
  }

  if (count === 0) {
    return (
      <View style={containerStyle}>
        <Text variant="label">{badgeNotEarnedMessage}</Text>
      </View>
    );
  }

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <View style={containerStyle}>
      <Text variant="label">{`${awardedDatePrefix} ${formattedDate}`}</Text>
    </View>
  );
};

const BadgeTileStatus: FC = () => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, type } = configuration;

  if (type !== BadgeTileType.Specific || count === 1) {
    return null;
  }

  return (
    <View style={styles.indicatorContainer}>
      {count === 0 ? (
        <LockKeyholeIcon color="#FFF" size={20} />
      ) : (
        <Text style={styles.countText}>{count}x</Text>
      )}
    </View>
  );
};

export const BadgeTile = BadgeTileInner as BadgeTileComponent;

BadgeTile.Media = BadgeTileMedia;
BadgeTile.Title = BadgeTileTitle;
BadgeTile.Description = BadgeTileDescription;
BadgeTile.DateEarned = BadgeTileDateEarned;
BadgeTile.Status = BadgeTileStatus;

export default BadgeTile;
