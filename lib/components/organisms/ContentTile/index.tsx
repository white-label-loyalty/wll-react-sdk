import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Tile } from '../../../types/tile';
import BaseTile from '../../atoms/BaseTile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Icon } from '../../atoms';
import { useTheme } from '../../../context/ThemeContext';

type ContentTileProps = {
  tile: Tile;
  children?: ReactNode;
};

const ContentTile: FC<ContentTileProps> = ({ tile }) => {
  return (
    <BaseTile tile={tile}>
      <BaseTile.Image style={styles.image} />
      <View style={styles.textContainer}>
        <BaseTile.Title />
        <BaseTile.Body />
      </View>
    </BaseTile>
  );
};

const styles = StyleSheet.create({
  textContainer: createResponsiveStyle({
    paddingHorizontal: [8, 8, 12],
  }),
  image: createResponsiveStyle({
    width: '100%',
    marginBottom: [8, 8, 12],
  }),
  row: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: [4, 4, 8],
    justifyContent: 'space-between',
  }),
});

export default ContentTile;
