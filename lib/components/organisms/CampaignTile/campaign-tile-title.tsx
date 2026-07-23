import React from 'react';
import { CampaignTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useCampaignTileStyles } from './styles';

/**
 * Renders the title of a Campaign Tile.
 *
 * @returns React.ReactElement or null if no name is present
 */

export const CampaignTileTitle = (): React.ReactElement | null => {
  const tileContext = useTileContext();
  const styles = useCampaignTileStyles();

  if (!isContextValid(tileContext)) return null;

  const { name } = tileContext.configuration as CampaignTileConfig;

  if (!name) return null;

  return (
    <Text
      variant="title"
      ellipsizeMode="tail"
      numberOfLines={1}
      role="heading"
      accessibilityLabel={`Campaign title: ${name}`}
      testID="campaign-tile-title"
      style={styles.titleText}
    >
      {name}
    </Text>
  );
};
