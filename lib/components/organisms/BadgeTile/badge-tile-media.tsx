import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { shouldDesaturate } from '../../../utils/themeHelpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';

export type BadgeTileMediaProps = {
  children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof ProgressiveImage>, 'source'>;

export const BadgeTileMedia = ({
  children,
  ...props
}: BadgeTileMediaProps): JSX.Element | null => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, artworkUrl, emptyBadgeArtworkUrl, type } = configuration;

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
      />
      {children}
    </View>
  );
};
