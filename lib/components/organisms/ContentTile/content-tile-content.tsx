import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { BaseTile } from '../../atoms';
import { useContentTileStyles } from './styles';

export const ContentTileContent = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const styles = useContentTileStyles();
  return (
    <BaseTile.Content>
      <View style={styles.content}>{children}</View>
    </BaseTile.Content>
  );
};
