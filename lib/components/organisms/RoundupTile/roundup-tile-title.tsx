import React from 'react';
import { RoundupTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Icon, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useWllSdk } from '../../../context/WllSdkContext';

/**
 * Renders the title of a Roundup Tile.
 *
 * @returns JSX.Element or null if no title is present
 */

export const RoundupTileTitle = (): JSX.Element | null => {
  const tileContext = useTileContext();
  const sdk = useWllSdk();

  if (!isContextValid(tileContext)) return null;

  const { title, ctaLink } = tileContext.configuration as RoundupTileConfig;

  if (!title) return null;

  return (
    <>
      <Text
        variant="eyebrow"
        testID="roundup-tile-title"
        role="heading"
        accessibilityLabel={title}
        numberOfLines={1}
      >
        {title}
      </Text>
      {ctaLink && (
        <Icon
          name="ChevronRight"
          color={sdk.theme?.derivedSurfaceText?.[20]}
          accessibilityLabel="View details"
        />
      )}
    </>
  );
};
