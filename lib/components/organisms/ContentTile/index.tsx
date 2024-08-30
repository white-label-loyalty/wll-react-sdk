import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Tile } from '../../../types/tile';
import BaseTile from '../../atoms/BaseTile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';

type ContentTileProps = {
  tile: Tile;
  children?: ReactNode;
};

const ContentTile: FC<ContentTileProps> = ({ children, tile }) => {
  return (
    <BaseTile tile={tile}>
      {children || (
        <>
          <BaseTile.Image style={styles.image} />
          <View style={styles.textContainer}>
            <BaseTile.Title />
            <BaseTile.Body />
          </View>
        </>
      )}
    </BaseTile>
  );
};

const styles = StyleSheet.create({
  textContainer: createResponsiveStyle({
    paddingHorizontal: [8, 8, 12],
  }),
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  image: createResponsiveStyle({
    width: '100%',
    marginBottom: [8, 8, 12],
  }),
});

export default ContentTile;
