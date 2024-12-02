import React, { FC } from 'react';
import { BaseTile } from '../../atoms';
import { useContentTileStyles } from './styles';

export const ContentTileMedia: FC = () => {
  const styles = useContentTileStyles();
  return <BaseTile.Media style={styles.media} />;
};
