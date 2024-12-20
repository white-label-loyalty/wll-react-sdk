import React from 'react';
import { PointsTileConfig } from '../../../types/tile';
import { Layout, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { usePointsTileStyles } from './styles';

export const PointsTileFormattedPoints = (): JSX.Element | null => {
  const styles = usePointsTileStyles();
  const { configuration } = useTileContext();
  const {
    multiplier = 1,
    pointsPrefix = '',
    pointsSuffix = 'pts',
    points,
  } = configuration as PointsTileConfig;

  if (points === undefined) return null;
  const calculatedPoints = points * multiplier;

  return (
    <Text variant="caption">
      {pointsPrefix}
      <Layout direction="row">
        {calculatedPoints}
        <Text style={styles.suffix}>{pointsSuffix}</Text>
      </Layout>
    </Text>
  );
};
