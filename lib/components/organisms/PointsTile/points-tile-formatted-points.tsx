import * as React from 'react';
import { PointsTileConfig } from '../../../types/tile';
import { Row, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { usePointsTileStyles } from './styles';

export const PointsTileFormattedPoints: React.FC = () => {
  const styles = usePointsTileStyles();
  const { configuration } = useTileContext();
  const { multiplier, pointsPrefix, pointsSuffix, points } =
    configuration as PointsTileConfig;

  const calculatedPoints =
    points !== undefined ? points * (multiplier ?? 1) : null;

  if (calculatedPoints === null) return null;
  return (
    <Text variant="caption">
      {pointsPrefix ?? ''}
      <Row>
        {calculatedPoints}
        <Text style={styles.suffix}>{pointsSuffix ?? 'pts'}</Text>
      </Row>
    </Text>
  );
};
