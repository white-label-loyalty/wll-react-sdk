// @ts-nocheck
// TypeScript will now ignore all errors in this file Tile Deprecated

import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { useWllSdk } from '../../../context/WllSdkContext';
import { useTileSize } from '../../../hooks/useTileSize';
import { TierTileConfig, TierTileType, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { ProgressIndicator } from '../../molecules';

type TierTileProps = {
  tile: Tile;
};

const TierTile: React.FC<TierTileProps> & {
  Name: typeof Name;
  Count: typeof Count;
  Image: typeof TierTileImage;
  Progress: typeof Progress;
  Description: typeof Description;
  NextName: typeof NextName;
  NextCount: typeof NextCount;
} = ({ tile }) => {
  const { isFullSize } = useTileSize(tile);
  const configuration = tile.configuration as TierTileConfig;

  const styles = StyleSheet.create({
    container: createResponsiveStyle({
      paddingHorizontal: [8, 8, 12],
      width: '100%',
      flexDirection: isFullSize ? 'column' : 'row-reverse',
      alignItems: isFullSize ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      marginTop: isFullSize ? 20 : null,
    }),
    contentContainer: {
      flexDirection: 'column',
      width: isFullSize ? '100%' : 'auto',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
  });

  const renderTileContent = () => {
    switch (configuration.type) {
      case TierTileType.currentTier:
        return (
          <>
            <TierTile.Image isFullSize={isFullSize} />
            <View style={styles.container}>
              <Text variant="caption">Current Tier</Text>
              <View style={styles.row}>
                <TierTile.Name />
                <TierTile.Count />
              </View>
            </View>
          </>
        );
      case TierTileType.specificTier:
        return (
          <>
            <TierTile.Progress />
            <View style={styles.container}>
              <View style={styles.row}>
                <View>
                  <Text variant="body">Current Tier</Text>
                  <TierTile.Name />
                </View>
                <View>
                  <TierTile.NextName />
                </View>
              </View>
            </View>
          </>
        );
      case TierTileType.currentTargetNext:
        return (
          <>
            <TierTile.Image isFullSize={isFullSize} />
            <View style={{ padding: 12 }}>
              <TierTile.Progress />
              <View style={styles.container}>
                <TierTile.Count />
                <TierTile.Description />
              </View>
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return <BaseTile tile={tile}>{renderTileContent()}</BaseTile>;
};

type TierTileImageProps = {
  isFullSize: boolean;
};

const TierTileImage: React.FC<TierTileImageProps> = ({ isFullSize }) => {
  const { theme } = useWllSdk();
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;

  const styles = StyleSheet.create({
    imageContainer: createResponsiveStyle({
      width: isFullSize ? '100%' : 57,
      height: isFullSize ? '100%' : 57,
      marginBottom: isFullSize ? [8, 8, 12] : 0,
      backgroundColor: isFullSize
        ? theme.alphaDerivedPrimary[20]
        : theme.surface,
      justifyContent: 'center',
      alignItems: 'center',
      flexBasis: isFullSize ? '50%' : null,
    }),
    image: {
      width: '80%',
      height: '80%',
      resizeMode: 'contain',
    },
  });

  if (!tier) return null;

  return (
    <View style={styles.imageContainer}>
      {tier.artworkUrl && (
        <Image source={{ uri: tier.artworkUrl }} style={styles.image} />
      )}
    </View>
  );
};

const Name: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;
  return <Text variant="title">{tier?.name}</Text>;
};

const NextName: React.FC = () => {
  const { configuration } = useTileContext();
  const { targetTier } = configuration as TierTileConfig;
  return <Text variant="title">{targetTier?.name}</Text>;
};

const NextPointsCount: React.FC = () => {
  const { configuration } = useTileContext();
  const { targetTier } = configuration as TierTileConfig;
  return <Text>400 pts away</Text>;
};

const Count: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Text variant="tier-earned">{`${tier?.earnedPoints}/`}</Text>
      <Text variant="tier-requirement">{tier?.pointsRequirement}</Text>
    </View>
  );
};

const NextCount: React.FC = () => {
  const { configuration } = useTileContext();
  const { targetTier } = configuration as TierTileConfig;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Text variant="tier-earned">{`${targetTier?.earnedPoints}/`}</Text>
      <Text variant="tier-requirement">{targetTier?.pointsRequirement}</Text>
    </View>
  );
};

const Progress: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;

  if (
    !tier ||
    tier.earnedPoints === undefined ||
    tier.pointsRequirement === undefined
  ) {
    return null;
  }

  return (
    <ProgressIndicator
      currentPoints={tier.earnedPoints}
      maxPoints={tier.pointsRequirement}
      attained={tier.attained}
    />
  );
};

const Description: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;
  return <Text variant="body">{tier?.description}</Text>;
};

TierTile.Name = Name;
TierTile.Count = Count;
TierTile.Image = TierTileImage;
TierTile.Progress = Progress;
TierTile.Description = Description;
TierTile.NextName = NextName;
TierTile.NextCount = NextCount;

export default TierTile;
