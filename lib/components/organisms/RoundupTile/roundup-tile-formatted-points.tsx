import React from 'react';
import { View } from 'react-native';
import { RoundupTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { Row } from '../../atoms/Primatives';
import { useRoundupTileStyles } from './styles';

/**
 * Renders formatted points value for a Roundup Tile.
 *
 * @returns JSX.Element or null if points are undefined or zero
 */

export const RoundupTileFormattedPoints = (): JSX.Element | null => {
  const styles = useRoundupTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    amountPrefix = '',
    amountSuffix = '',
    amount = 0,
  } = tileContext.configuration as RoundupTileConfig;

  if (amount === undefined) return null;

  const fullPointsText =
    `${amountPrefix}${amount} ${amountSuffix}`.trim();

  return (
    <View
      testID="roundup-tile-amount"
      role="article"
      accessibilityLabel={`Amount: ${fullPointsText}`}
    >
      <Row align="center" justify="start">
        {amountPrefix ? (
          <Text variant="caption" testID="roundup-tile-prefix">
            {amountPrefix}
          </Text>
        ) : null}
        <Text variant="caption" testID="roundup-tile-value">
          {amount}
        </Text>
        {amountSuffix ? (
          <Text
            variant="caption"
            style={styles.suffix}
            testID="roundup-tile-suffix"
          >
            {amountSuffix}
          </Text>
        ) : null}
      </Row>
    </View>
  );
};
