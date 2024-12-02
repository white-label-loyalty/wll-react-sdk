import * as React from 'react';
import { View } from 'react-native';
import { PointsTileConfig } from '../../../types/tile';
import { useTileContext } from '../../atoms/BaseTile';
import { usePointsTileStyles } from './styles';
import { Text, Row } from '../../atoms';

export const PointsTileFormattedPoints: React.FC = () => {
  const styles = usePointsTileStyles();
  const { configuration } = useTileContext();
  const { multiplier, prefix, suffix, points } =
    configuration as PointsTileConfig;

  const calculatedPoints =
    points !== undefined ? points * (multiplier ?? 1) : null;

  if (calculatedPoints === null) return null;
  return (
    <Text variant="caption">
      {prefix ?? ''}
      <Row>
        {calculatedPoints}
        <Text style={styles.suffix}>{suffix ?? 'pts'}</Text>
      </Row>
    </Text>
  );
};
