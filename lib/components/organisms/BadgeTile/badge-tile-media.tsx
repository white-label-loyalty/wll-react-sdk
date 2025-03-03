import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { shouldDesaturate } from '../../../utils/themeHelpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';

export type BadgeTileMediaProps = {
  children?: React.ReactNode;
  alt?: string;
} & Omit<React.ComponentProps<typeof ProgressiveImage>, 'source' | 'alt'>;
/**
 * Renders the media for a Badge Tile.
 *
 * @returns JSX.Element or null if media is not present
 */
export const BadgeTileMedia = ({
  children,
  alt,
  ...props
}: BadgeTileMediaProps): JSX.Element | null => {
  const styles = useBadgeTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { count, artworkUrl, emptyBadgeArtworkUrl, type, name } =
    tileContext.configuration as BadgeTileConfig;

  const displayUrl =
    type === BadgeTileType.Specific
      ? artworkUrl
      : count === 0
        ? emptyBadgeArtworkUrl
        : artworkUrl;

  if (!displayUrl) return null;

  return (
    <View style={styles.header} testID="badge-tile-media">
      <ProgressiveImage
        {...props}
        source={{ uri: displayUrl }}
        style={styles.image}
        resizeMode="contain"
        isDesaturated={shouldDesaturate(type, count)}
        alt={
          alt ??
          `Badge ${name}${type === BadgeTileType.Latest && count === 0 ? ' (not earned)' : ''}`
        }
      />
      {children}
    </View>
  );
};
