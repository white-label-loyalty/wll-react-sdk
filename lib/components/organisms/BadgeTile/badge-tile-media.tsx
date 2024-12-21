import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig } from '../../../types/tile';
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
  const { type, count, artworkUrl, emptyBadgeArtworkUrl, name } = configuration;

  const displayUrl = count === 0 ? emptyBadgeArtworkUrl : artworkUrl;
  if (!displayUrl) return null;

  const imageState = count === 0 ? 'locked' : 'earned';
  const accessibilityLabel = `Badge image for ${name || 'unnamed badge'}${count === 0 ? ' - Locked' : ' - Earned'}`;

  return (
    <View 
      style={styles.header}
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
    >
      <ProgressiveImage
        {...props}
        source={{ uri: displayUrl }}
        style={styles.image}
        resizeMode="contain"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      />
      {children}
    </View>
  );
};
