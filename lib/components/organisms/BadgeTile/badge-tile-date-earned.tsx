import React from 'react';
import {
  BadgeTileConfig,
  BadgeTileType,
  StatusVariant,
} from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { handleLastEarnedDate } from '../../../utils/transforms';
import { Chip } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the date earned for a Badge Tile.
 *
 * @returns React.ReactElement or null if badge is not earned or badgeNotEarnedMessage exists
 */
export const BadgeTileDateEarned = (): React.ReactElement | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    count,
    awardedDatePrefix,
    lastEarnedAt,
    badgeNotEarnedMessage,
    type,
    locale,
  } = tileContext.configuration as BadgeTileConfig;

  // Don't show for Latest type with count=0
  if (type === BadgeTileType.Latest && count === 0) {
    return null;
  }

  // For Specific type, only show if count > 0 or badgeNotEarnedMessage exists
  if (
    type === BadgeTileType.Specific &&
    count === 0 &&
    !badgeNotEarnedMessage
  ) {
    return null;
  }

  const formattedDate = handleLastEarnedDate(lastEarnedAt, locale);

  const displayText =
    count === 0
      ? badgeNotEarnedMessage
      : `${awardedDatePrefix} ${formattedDate}`;

  const accessibilityLabel =
    count === 0 ? 'Badge not yet earned' : `Badge earned on ${formattedDate}`;

  return (
    <Chip
      label={displayText?.toString() || ''}
      variant={count === 0 ? StatusVariant.GREY : StatusVariant.PRIMARY}
      accessibilityLabel={accessibilityLabel}
      testID="badge-tile-date-earned"
    />
  );
};
