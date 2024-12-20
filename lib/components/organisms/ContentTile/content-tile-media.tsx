import React from 'react';
import { ImageStyle } from 'react-native';
import { BaseTile } from '../../atoms';
import { useContentTileStyles } from './styles';

export const ContentTileMedia = (): JSX.Element => {
  const styles = useContentTileStyles();
  return <BaseTile.Media style={styles.media as ImageStyle} />;
};
