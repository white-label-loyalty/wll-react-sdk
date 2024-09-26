import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import BaseTile from '../../atoms/BaseTile';

type ContentTileProps = {
  tile: Tile;
};

const ContentTile: React.FC<ContentTileProps> = ({ tile }) => {
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
  }),
  row: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: [4, 4, 8],
    justifyContent: 'space-between',
  }),
});

export default ContentTile;
