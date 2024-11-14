// @ts-nocheck
// TypeScript will now ignore all errors in this file Tile Deprecated

import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tile } from '../../../types/tile';

type Props = {
  tile: Tile;
};
const TierTileNew: FC<Props> = ({
  type,
  progressType,
  pointsMultiplier,
  pointsPrefix,
  pointsSuffix,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'CURRENT':
        return <CurrentTierContent />;
      case 'NEXT':
        return <NextTierContent />;
      case 'SPECIFIC':
        return <SpecificTierContent />;
      default:
        return <Text>Invalid tile type</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      {progressType === 'POINTS' && (
        <PointsProgress
          multiplier={pointsMultiplier}
          prefix={pointsPrefix}
          suffix={pointsSuffix}
        />
      )}
      {progressType === 'NAME' && <NameProgress />}
    </View>
  );
};

const CurrentTierContent = () => (
  <View style={styles.tileContent}>
    <Text style={styles.title}>Current Tier</Text>
    <Text style={styles.subtitle}>Tier-full size</Text>
    <TrophyIcon />
  </View>
);

const NextTierContent = () => (
  <View style={styles.tileContent}>
    <Text style={styles.title}>Next Tier</Text>
    <TrophyIcon />
  </View>
);

const SpecificTierContent = () => (
  <View style={styles.tileContent}>
    <Text style={styles.title}>Specific Tier</Text>
    <TrophyIcon />
  </View>
);

const PointsProgress = ({ multiplier, prefix, suffix }) => (
  <View style={styles.progressContainer}>
    <Text style={styles.progressText}>
      {prefix && `${prefix} `}
      {(4405 * multiplier).toFixed(2)}
      {suffix && ` ${suffix}`}
    </Text>
    <Text style={styles.progressLabel}>Tierupgress Points</Text>
  </View>
);

const NameProgress = () => (
  <View style={styles.progressContainer}>
    <Text style={styles.progressText}>Tierupgress Name</Text>
  </View>
);

const TrophyIcon = () => (
  <View style={styles.trophyContainer}>
    <Text style={styles.trophyIcon}>🏆</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0ff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  tileContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressLabel: {
    fontSize: 12,
    color: '#666',
  },
  trophyContainer: {
    marginTop: 8,
  },
  trophyIcon: {
    fontSize: 24,
  },
});

export default TierTileNew;
