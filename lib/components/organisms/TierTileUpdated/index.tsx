import * as React from 'react';
import { Image, View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { TierTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Column, ProgressiveImage, Text } from '../../atoms';
import { Layout } from '../../atoms/Primatives';
import { useTierTileStyles } from './styles';

type TierTileProps = {
  tile: Tile;
};

type TierTileComponent = React.FC<TierTileProps> & {
  Full: typeof TierTileFull;
  Half: typeof TierTileHalf;
  Empty: typeof TierTileEmpty;
};

const TierTileInner: React.FC<TierTileProps> = ({ tile }) => {
  if (!tile) return null;

  const { configuration } = tile as { configuration: TierTileConfig };
  const { tier } = configuration;
  const { isHalfSize } = useTileSize(tile);

  if (!tier || Array.isArray(tier)) {
    return <TierTile.Empty tile={tile} />;
  }

  return isHalfSize ? (
    <TierTile.Half tile={tile} />
  ) : (
    <TierTile.Full tile={tile} />
  );
};

const TierTileFull: React.FC<TierTileProps> = ({ tile }) => {
  const styles = useTierTileStyles();

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
      <Layout
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
      </Layout>
    </BaseTile>
  );
};

const TierTileHalf: React.FC<TierTileProps> = ({ tile }) => {
  const styles = useTierTileStyles();

  const { configuration } = tile as { configuration: TierTileConfig };
  const { tier, title } = configuration as TierTileConfig;
  const { artworkUrl, name } = tier || {};

  return (
    <BaseTile tile={tile}>
      <Layout
        align="center"
        justify="between"
        direction="row"
        style={{ paddingTop: 16 }}
      >
        <View style={{ flex: 1, flexShrink: 1 }}>
          {title && (
            <Text variant="eyebrow" style={styles.title}>
              {title}
            </Text>
          )}
          {name && (
            <Text variant="title" style={styles.name} numberOfLines={2}>
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
      </Layout>
    </BaseTile>
  );
};

// Empty state tile
const TierTileEmpty: React.FC<TierTileProps> = ({ tile }) => {
  const styles = useTierTileStyles();
  const { configuration } = tile as { configuration: TierTileConfig };
  const { title, emptyDescription, emptyArtworkUrl } = configuration;
  const { isHalfSize } = useTileSize(tile);

  if (isHalfSize) {
    return (
      <BaseTile tile={tile}>
        <Layout
          align="center"
          justify="between"
          direction="row"
          style={{ paddingTop: 16 }}
        >
          <Column style={{ flex: 1 }}>
            {title && (
              <Text variant="title" style={styles.title}>
                {title}
              </Text>
            )}
            {emptyDescription && <Text variant="body">{emptyDescription}</Text>}
          </Column>
          {emptyArtworkUrl && (
            <Column style={styles.smallImageContainer}>
              <Image
                source={{ uri: emptyArtworkUrl }}
                style={styles.smallImage}
                resizeMode="contain"
              />
            </Column>
          )}
        </Layout>
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
      <Layout align="stretch" justify="center" direction="column">
        <Column>
          {title && (
            <Text variant="title" style={styles.title}>
              {title}
            </Text>
          )}
          {emptyDescription && <Text variant="body">{emptyDescription}</Text>}
        </Column>
      </Layout>
    </BaseTile>
  );
};

export const TierTile = TierTileInner as TierTileComponent;

TierTile.Full = TierTileFull;
TierTile.Half = TierTileHalf;
TierTile.Empty = TierTileEmpty;

export default TierTile;
