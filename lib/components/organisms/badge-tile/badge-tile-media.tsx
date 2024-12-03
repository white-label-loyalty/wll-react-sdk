import React, { FC } from 'react';
import { View } from 'react-native';
import { BadgeTileMediaProps } from '.';
import { BadgeTileConfig } from '../../../types/tile';
import { shouldDesaturate } from '../../../utils/theme-helpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/base-tile';
import { useBadgeTileStyles } from './styles';

export const BadgeTileMedia: FC<BadgeTileMediaProps> = ({
  children,
  ...props
}) => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, artworkUrl, emptyBadgeArtworkUrl } = configuration;

  const displayUrl = count === 0 ? emptyBadgeArtworkUrl : artworkUrl;
  if (!displayUrl) return null;

  return (
    <View style={styles.header}>
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
