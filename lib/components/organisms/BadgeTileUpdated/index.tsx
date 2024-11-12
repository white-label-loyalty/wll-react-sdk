// @ts-nocheck
// TypeScript will now ignore all errors in this file Tile Deprecated

import { LockKeyholeIcon } from 'lucide-react';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { ImagePropsNoSource } from '../../../types/common';
import { BadgeTileConfig, BadgeTileType, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { getStateColor, shouldDesaturate } from '../../../utils/themeHelpers';
import { BaseTile, Content, ProgressiveImage, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

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
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, details, emptyBadgeArtworkUrl } = configuration;

  if (!details || details.length === 0) {
    if (emptyBadgeArtworkUrl) {
      return (
        <View style={styles.header}>
          <ProgressiveImage
            source={{ uri: emptyBadgeArtworkUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      );
    }
    return null;
  }

  const { artworkUrl } = details[0];
  if (!artworkUrl) return null;

  return (
    <View style={styles.header}>
      <ProgressiveImage
        {...props}
        source={{ uri: artworkUrl }}
        style={styles.image}
        resizeMode="contain"
        isDesaturated={shouldDesaturate(type, count)}
      />
      {children}
    </View>
  );
};

const BadgeTileTitle: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { details, emptyBadgeMessage } = configuration;

  if (!details || details.length === 0) {
    if (emptyBadgeMessage) {
      return (
        <Text variant="title" style={styles.titleText}>
          {emptyBadgeMessage}
        </Text>
      );
    }
    return null;
  }

  const { name } = details[0];
  if (!name) return null;

  return (
    <Text variant="title" numberOfLines={1} ellipsizeMode="tail">
      {name}
    </Text>
  );
};

const BadgeTileDescription: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { details } = configuration;

  if (!details || details.length === 0) return null;
  const { description } = details[0];

  if (!description) return null;

  return (
    <View style={styles.descriptionContainer}>
      <Text
        variant="body"
        style={styles.descriptionText}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {description}
      </Text>
    </View>
  );
};

const BadgeTileDateEarned: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, awardedDatePrefix, details, badgeNotEarnedMessage } =
    configuration;
  const { theme } = useWllSdk();

  const hasDetails = details && details.length > 0;
  const backgroundColor = getStateColor(
    theme.alphaDerivedPrimary[20],
    type,
    count
  );
  const containerStyle = [styles.dateEarnedContainer, { backgroundColor }];

  // No date shown for Latest type with no badges
  if (type === BadgeTileType.Latest && !hasDetails) {
    return null;
  }

  // Show not earned message
  if (!hasDetails || count === 0) {
    return (
      <View style={containerStyle}>
        <Text variant="label">{badgeNotEarnedMessage}</Text>
      </View>
    );
  }

  // Show earned date
  const formattedDate = new Date(details[0].createdAt).toLocaleDateString();

  return (
    <View style={containerStyle}>
      <Text variant="label">{`${awardedDatePrefix} ${formattedDate}`}</Text>
    </View>
  );
};

const BadgeTileStatus: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, type } = configuration;

  if (type !== BadgeTileType.Specific || (count && count === 1)) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: createResponsiveStyle({
    position: 'absolute',
    bottom: [8, 8, 16],
    right: [8, 8, 16],
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  }),
  countText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  header: createResponsiveStyle({
    flexBasis: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: [8, 8, 16],
  }),
  image: createResponsiveStyle({
    width: '100%',
    height: '100%',
  }),
  emptyText: {
    textAlign: 'center',
  },
  titleText: createResponsiveStyle({
    marginBottom: [4, 4, 8],
  }),
  descriptionContainer: {},
  descriptionText: {},
  dateEarnedContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
});

export default BadgeTile;
