import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { BaseTile } from '../../atoms';
import { useContentTileStyles } from './styles';

export const ContentTileContent: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const styles = useContentTileStyles();
  return (
    <BaseTile.Content>
      <View style={styles.content}>{children}</View>
    </BaseTile.Content>
  );
};
