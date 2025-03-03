import React from 'react';
import { View } from 'react-native';
import { WithChildren } from '../../../types/helpers';
import { BaseTile } from '../../atoms';
import { useContentTileStyles } from './styles';

export const ContentTileContent = ({ children }: WithChildren): JSX.Element => {
  const styles = useContentTileStyles();
  return (
    <BaseTile.Content>
      <View style={styles.content}>{children}</View>
    </BaseTile.Content>
  );
};
