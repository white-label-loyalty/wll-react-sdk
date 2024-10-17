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
      <View style={styles.contentContainer}>
        <BadgeTile.Image />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <BadgeTile.Title />
            <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
          </View>
          <BadgeTile.Body />
        </View>
      </View>
    </BaseTile>
  );
};

const BadgeTileImage: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const badgeDetails = configuration.details?.[0];
  if (!badgeDetails?.artworkUrl) return null;
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
        source={{ uri: badgeDetails.artworkUrl }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const BadgeTileTitle: FC = (props) => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const badgeDetails = configuration.details?.[0];
  if (!badgeDetails?.name) return null;
  return (
    <Text variant="title" {...props} numberOfLines={1} ellipsizeMode="tail">
      {badgeDetails.name}
    </Text>
  );
};

const BadgeTileBody: FC = (props) => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const badgeDetails = configuration.details?.[0];
  if (!badgeDetails?.description) return null;
  return (
    <Text variant="body" {...props}>
      {badgeDetails.description}
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
  contentContainer: {
    flexDirection: 'column',
    height: '100%',
  },
  textContainer: createResponsiveStyle({
    paddingHorizontal: [8, 8, 12],
    flex: 1,
  }),
  imageContainer: createResponsiveStyle({
    width: '100%',
    aspectRatio: 2 / 1,
    marginBottom: [8, 8, 12],
    position: 'relative',
    overflow: 'hidden',
  }),
  row: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
  lockOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BadgeTile;
