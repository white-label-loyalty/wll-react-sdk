import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { IS_MOBILE } from '../../../constants/device';
import { useDataContext } from '../../../context/DataContext';
import { useDataUpdate } from '../../../hooks/useDataUpdate';
import { PointsTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { registerPointsUpdateCallback } from '../../../utils/directDomUpdates';
import { applyMultiplier } from '../../../utils/pointsHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { Row } from '../../atoms/Primatives';
import { usePointsTileStyles } from './styles';

/**
 * Renders formatted points value for a Points Tile.
 *
 * @returns JSX.Element or null if points are undefined or zero
 */

export const PointsTileFormattedPoints = (): JSX.Element | null => {
  const styles = usePointsTileStyles();
  const tileContext = useTileContext();
  const { pointsCache } = useDataContext();
  const { refreshPointsInBackground } = useDataUpdate();

  if (!isContextValid(tileContext) || !tileContext.id) return null;

  const tileId = tileContext.id;
  const config = tileContext.configuration as PointsTileConfig;

  if (!config) return null;

  const {
    pointsMultiplier = 1,
    pointsPrefix = '',
    pointsSuffix = 'pts',
  } = config;

  const cachedPoints = pointsCache[tileId];
  const points = cachedPoints !== undefined ? cachedPoints : config.points || 0;

  const [directPoints, setDirectPoints] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (IS_MOBILE && tileId) {
      const unregister = registerPointsUpdateCallback(tileId, (newPoints) => {
        setDirectPoints(newPoints);
      });

      return unregister;
    }
  }, [tileId]);

  useEffect(() => {
    if (tileId) {
      refreshPointsInBackground(tileId);
    }
  }, [tileId, refreshPointsInBackground]);

  if (points === undefined) return null;

  const pointsValue = directPoints !== undefined ? directPoints : points;
  const calculatedPoints = applyMultiplier(pointsValue, pointsMultiplier);
  const fullPointsText =
    `${pointsPrefix}${calculatedPoints} ${pointsSuffix}`.trim();

  return (
    <View
      testID="points-tile-points"
      accessibilityRole="text"
      accessibilityLabel={`Points value: ${fullPointsText}`}
    >
      <Row align="center" justify="start">
        {pointsPrefix ? (
          <Text variant="caption" testID="points-tile-prefix">
            {pointsPrefix}
          </Text>
        ) : null}
        <Text
          variant="caption"
          testID="points-tile-value"
          // Add data attribute for direct DOM updates (web only)
          {...(Platform.OS === 'web' ? { 'data-tile-id': tileId } : {})}
        >
          {calculatedPoints}
        </Text>
        {pointsSuffix ? (
          <Text
            variant="caption"
            style={styles.suffix}
            testID="points-tile-suffix"
          >
            {pointsSuffix}
          </Text>
        ) : null}
      </Row>
    </View>
  );
};
