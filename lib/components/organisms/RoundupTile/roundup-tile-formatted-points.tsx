import React from 'react';
import { View } from 'react-native';
import { RoundupTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { Row } from '../../atoms/Primatives';
import { cleanNumber } from '../../../utils/pointsHelpers';
/**
 * Renders formatted points value for a Roundup Tile.
 *
 * @returns JSX.Element or null if points are undefined or zero
 */

export const RoundupTileFormattedPoints = (): JSX.Element | null => {
  const tileContext = useTileContext();

  console.log(tileContext, "tileContext");

  if (!isContextValid(tileContext)) return null;

  const {
    balance = 0,
    amountPrefix = '',
    amountSuffix = '',
  } = tileContext.configuration as RoundupTileConfig;

  if (balance === undefined) return null;

  const fullPointsText = `${amountPrefix}${cleanNumber(balance)}${amountSuffix}`.trim();

  return (
    <View
      testID="roundup-tile-amount"
      role="article"
      accessibilityLabel={`Amount: ${fullPointsText}`}
    >
      <Row align="center" justify="start">
        <Text variant="caption" testID="roundup-tile-value">
          {fullPointsText}
        </Text>
      </Row>
    </View>
  );
};
