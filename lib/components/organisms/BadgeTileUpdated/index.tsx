import { LockKeyholeIcon } from 'lucide-react';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { ImagePropsNoSource } from '../../../types/common';
import { BadgeTileConfig, BadgeTileType, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, ProgressiveImage, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

type BadgeTileProps = {
  tile: Tile;
};

type BadgeTileImageProps = ImagePropsNoSource & {
  children?: React.ReactNode;
};

type BadgeTileComponent = FC<BadgeTileProps> & {
  Image: FC<BadgeTileImageProps>;
  Content: FC;
  Title: FC;
  Description: FC;
  DateEarned: FC;
  Status: FC;
};

const BadgeTileInner: FC<BadgeTileProps> = ({ tile }) => {
  return (
    <BaseTile tile={tile}>
      <View style={styles.container}>
        <BadgeTile.Image>
          <BadgeTile.Status />
        </BadgeTile.Image>
        <View style={styles.content}>
          <View>
            <BadgeTile.Title />
            <BadgeTile.Description />
          </View>
          <BadgeTile.DateEarned />
        </View>
      </View>
    </BaseTile>
  );
};

const BadgeTileImage: FC<BadgeTileImageProps> = ({ children, ...props }) => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, details } = configuration;

  if (!details || details.length === 0) return null;
  const { artworkUrl } = details[0];

  if (!artworkUrl) return null;

  const isDesaturated = type === 'SPECIFIC' && count === 0;

  return (
    <View style={styles.header}>
      <ProgressiveImage
        {...props}
        source={{ uri: artworkUrl }}
        style={styles.image}
        resizeMode="contain"
        isDesaturated={isDesaturated}
      />
      {children}
    </View>
  );
};

const BadgeTileTitle: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { details } = configuration;
  if (!details || details.length === 0) return null;
  const { name } = details[0];

  if (!name) return null;

  return (
    <Text variant="title" style={styles.titleText}>
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
      <Text variant="body" style={styles.descriptionText}>
        {description}
      </Text>
    </View>
  );
};

const BadgeTileDateEarned: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, prefix, dateEarned } = configuration;
  const { theme } = useWllSdk();

  const isDesaturated = type === 'SPECIFIC' && count === 0;

  return (
    <View
      style={[
        styles.pill,
        {
          backgroundColor: isDesaturated
            ? '#D7D7D7'
            : theme.alphaDerivedPrimary[20],
        },
      ]}
    >
      <Text variant="label">
        {count === 0
          ? 'Badge not earned yet'
          : `${prefix} ${new Date(dateEarned).toLocaleDateString()}`}
      </Text>
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

BadgeTile.Image = BadgeTileImage;
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
  content: createResponsiveStyle({
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: [8, 8, 16],
    paddingBottom: [8, 8, 16],
  }),
  titleText: createResponsiveStyle({
    // marginBottom: [4, 4, 8],
  }),
  descriptionContainer: {},
  descriptionText: {},
  pill: {
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
  },
});

export default BadgeTile;
