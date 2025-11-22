import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { VenueTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useVenueTileStyles } from './styles';

/**
 * Renders the title of a Venue Tile.
 *
 * @returns React.ReactElement or null if no name is present
 */

export const VenueTileTitle = (): React.ReactElement | null => {
  const tileContext = useTileContext();
  const styles = useVenueTileStyles();

  if (!isContextValid(tileContext)) return null;

  const { name } = tileContext.configuration as VenueTileConfig;

  if (!name) return null;

  const handleTitleWidth = () => {
    if (IS_MOBILE) {
      return styles.tileTitle;
    }
  };

  return (
    <Text
      variant="title"
      ellipsizeMode="tail"
      numberOfLines={1}
      role="heading"
      accessibilityLabel={`Venue title: ${name}`}
      testID="venue-tile-title"
      style={handleTitleWidth()}
    >
      {name}
    </Text>
  );
};
