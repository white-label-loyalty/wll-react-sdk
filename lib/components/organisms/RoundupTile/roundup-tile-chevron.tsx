import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RoundupTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Icon } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { View } from 'react-native';
import { useRoundupTileStyles } from './styles';

/**
 * Renders a chevron icon for a Roundup Tile.
 *
 * @returns JSX.Element
 */

export const RoundupTileChevron = (): JSX.Element | null => {
  const tileContext = useTileContext();
  const sdk = useWllSdk();
  const styles = useRoundupTileStyles();

  if (!isContextValid(tileContext)) return null;

  const { ctaLink } = tileContext.configuration as RoundupTileConfig;

  if (!ctaLink) return null;

  return (
    <View style={styles.chevronContainer}>
      <Icon
        name="ChevronRight"
        size={16}
        color={sdk.theme?.derivedSurfaceText?.[20] || '#000000'}
        role="img"
        accessibilityLabel="View balance"
      />
    </View>
  );
};
