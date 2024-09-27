import { LockKeyholeIcon } from 'lucide-react';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { ImagePropsNoSource } from '../../../types/common';
import { BadgeTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, Icon, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

type BadgeTileProps = {
  tile: Tile;
};

type BadgeTileComponent = FC<BadgeTileProps> & {
  Title: FC;
  Body: FC;
  Image: FC<ImagePropsNoSource>;
};

const BadgeTileInner: FC<BadgeTileProps> = ({ tile }) => {
  const { theme } = useWllSdk();
  return (
    <BaseTile tile={tile}>
      <BadgeTile.Image style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <BadgeTile.Title />
          <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
        </View>
        <BadgeTile.Body />
      </View>
    </BaseTile>
  );
};

const BadgeTileImage: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { badge } = configuration;
  if (!badge?.artworkUrl) return null;
  return (
    <View
      style={[
        styles.imageContainer,
        {
          backgroundColor: theme.alphaDerivedPrimary[20],
        },
      ]}
    >
      {configuration.count === 0 && <Locked />}
      <Image
        {...props}
        source={{ uri: badge.artworkUrl }}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

const BadgeTileTitle: FC = (props) => {
  const tile = useTileContext();
  const { badge } = tile.configuration as BadgeTileConfig;
  if (!badge?.name) return null;
  return (
    <Text variant="title" {...props}>
      {badge.name}
    </Text>
  );
};

const BadgeTileBody: FC = (props) => {
  const tile = useTileContext();
  const { badge } = tile.configuration as BadgeTileConfig;
  if (!badge?.description) return null;
  return (
    <Text variant="body" {...props}>
      {badge.description}
    </Text>
  );
};

const Locked = () => (
  <View style={styles.lockOverlay}>
    <LockKeyholeIcon color="#FFF" size={50} />
  </View>
);

export const BadgeTile = BadgeTileInner as BadgeTileComponent;

BadgeTile.Image = BadgeTileImage;
BadgeTile.Title = BadgeTileTitle;
BadgeTile.Body = BadgeTileBody;

const styles = StyleSheet.create({
  textContainer: createResponsiveStyle({
    paddingHorizontal: [8, 8, 12],
    flex: 1,
  }),
  imageContainer: createResponsiveStyle({
    width: '100%',
    flexBasis: '50%',
    marginBottom: [8, 8, 12],
    position: 'relative',
  }),
  row: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
  lockOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
});

export default BadgeTile;
