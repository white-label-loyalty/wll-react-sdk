// @ts-nocheck
// TypeScript will now ignore all errors in this file Tile Deprecated

import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { TierTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, Content, ProgressiveImage, Text } from '../../atoms';

type TierTileProps = {
  tile: Tile;
};

// Compound component types
type TierTileComponent = React.FC<TierTileProps> & {
  Full: typeof TierTileFull;
  Half: typeof TierTileHalf;
  Empty: typeof TierTileEmpty;
};

// Main component decides which variant to render
const TierTileInner: React.FC<TierTileProps> = ({ tile }) => {
  if (!tile) return null;

  const { configuration } = tile as { configuration: TierTileConfig };
  const { tier } = configuration;
  const { isHalfSize } = useTileSize(tile);

  // Determine which variant to show
  if (!tier || Array.isArray(tier)) {
    return <TierTile.Empty tile={tile} />;
  }

  return isHalfSize ? (
    <TierTile.Half tile={tile} />
  ) : (
    <TierTile.Full tile={tile} />
  );
};

// Full-size tile with artwork
const TierTileFull: React.FC<TierTileProps> = ({ tile }) => {
  const { configuration } = tile as { configuration: TierTileConfig };
  const { tier, title } = configuration;
  const { artworkUrl, name, description } = tier ?? {};

  return (
    <BaseTile tile={tile}>
      {artworkUrl && (
        <View style={styles.header}>
          <ProgressiveImage
            source={{ uri: artworkUrl }}
            style={styles.image}
            resizeMode="center"
          />
        </View>
      )}
      <Content
        align="stretch"
        justify={artworkUrl ? 'start' : 'center'}
        direction="column"
      >
        <View>
          {title && (
            <Text variant="eyebrow" style={styles.title}>
              {title}
            </Text>
          )}
          {name && (
            <Text variant="title" style={styles.title}>
              {name}
            </Text>
          )}
          {description && <Text variant="body">{description}</Text>}
        </View>
      </Content>
    </BaseTile>
  );
};

// Half-size tile with small artwork
const TierTileHalf: React.FC<TierTileProps> = ({ tile }) => {
  const { configuration } = tile as { configuration: TierTileConfig };
  const { tier, title } = configuration;
  const { artworkUrl, name } = tier;

  return (
    <BaseTile tile={tile}>
      <Content
        align="center"
        justify="between"
        direction="row"
        style={{ paddingTop: 16 }}
      >
        <View>
          {title && (
            <Text variant="eyebrow" style={styles.title}>
              {title}
            </Text>
          )}
          {name && (
            <Text variant="title" style={styles.title}>
              {name}
            </Text>
          )}
        </View>
        {artworkUrl && (
          <View style={styles.smallImageContainer}>
            <Image
              source={{ uri: artworkUrl }}
              style={styles.smallImage}
              resizeMode="contain"
            />
          </View>
        )}
      </Content>
    </BaseTile>
  );
};

// Empty state tile
const TierTileEmpty: React.FC<TierTileProps> = ({ tile }) => {
  const { configuration } = tile as { configuration: TierTileConfig };
  const { title, emptyDescription, emptyArtworkUrl } = configuration;
  const { isHalfSize } = useTileSize(tile);

  if (isHalfSize) {
    return (
      <BaseTile tile={tile}>
        <Content
          align="center"
          justify="between"
          direction="row"
          style={{ paddingTop: 16 }}
        >
          <View style={{ flex: 1 }}>
            {title && (
              <Text variant="title" style={styles.title}>
                {title}
              </Text>
            )}
            {emptyDescription && <Text variant="body">{emptyDescription}</Text>}
          </View>
          {emptyArtworkUrl && (
            <View style={styles.smallImageContainer}>
              <Image
                source={{ uri: emptyArtworkUrl }}
                style={styles.smallImage}
                resizeMode="contain"
              />
            </View>
          )}
        </Content>
      </BaseTile>
    );
  }

  return (
    <BaseTile tile={tile}>
      {emptyArtworkUrl && (
        <View style={styles.header}>
          <ProgressiveImage
            source={{ uri: emptyArtworkUrl }}
            style={styles.image}
            resizeMode="center"
          />
        </View>
      )}
      <Content align="stretch" justify="center" direction="column">
        <View>
          {title && (
            <Text variant="title" style={styles.title}>
              {title}
            </Text>
          )}
          {emptyDescription && <Text variant="body">{emptyDescription}</Text>}
        </View>
      </Content>
    </BaseTile>
  );
};

export const TierTile = TierTileInner as TierTileComponent;

// Assign variant components
TierTile.Full = TierTileFull;
TierTile.Half = TierTileHalf;
TierTile.Empty = TierTileEmpty;

const styles = StyleSheet.create({
  header: createResponsiveStyle({
    flexBasis: '50%',
    width: '100%',
    overflow: 'hidden',
    marginBottom: [8, 8, 12],
  }),
  title: createResponsiveStyle({
    marginBottom: [4, 4, 8],
  }),
  smallImageContainer: {
    width: 48,
    height: 48,
    position: 'relative',
  },
  smallImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default TierTile;
