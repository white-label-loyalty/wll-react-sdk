import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { BaseTile, Icon, Text } from '../../atoms';
import { Tile, TileConfig } from '../../../types/tile';
import { useTileContext } from '../../atoms/BaseTile';
import { ImagePropsNoSource } from '../../../types/common';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Badge } from '../../../types/wll';
import { useTheme } from '../../../context/ThemeContext';

type BadgeTileProps = {
  tile: Tile;
};

type BadgeTileComponent = FC<BadgeTileProps> & {
  Title: FC;
  Body: FC;
  Image: FC<ImagePropsNoSource>;
};

const BadgeTileInner: FC<BadgeTileProps> = ({ tile }) => {
  const { theme } = useTheme();
  return (
    <BaseTile tile={tile}>
      <BadgeTile.Image style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <BadgeTile.Title />
          <Icon
            name="ChevronRight"
            size={16}
            color={theme.derivedSurfaceText[20]}
          />
        </View>
        <BadgeTile.Body />
      </View>
    </BaseTile>
  );
};

const BadgeTileImage: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { badge } = tile.configuration as TileConfig & { badge?: Badge };
  if (!badge) return null;
  return <Image {...props} source={{ uri: badge.artworkUrl }} />;
};

const BadgeTileTitle: FC = (props) => {
  const tile = useTileContext();
  const { badge } = tile.configuration as TileConfig & { badge?: Badge };
  if (!badge) return null;
  return (
    <Text variant="title" {...props}>
      {badge.name}
    </Text>
  );
};

const BadgeTileBody: FC = (props) => {
  const tile = useTileContext();
  const { badge } = tile.configuration as TileConfig & { badge?: Badge };
  if (!badge) return null;
  return (
    <Text variant="body" {...props}>
      {badge.description}
    </Text>
  );
};

export const BadgeTile = BadgeTileInner as BadgeTileComponent;

BadgeTile.Image = BadgeTileImage;
BadgeTile.Title = BadgeTileTitle;
BadgeTile.Body = BadgeTileBody;

const styles = StyleSheet.create({
  textContainer: createResponsiveStyle({
    paddingHorizontal: [8, 8, 12],
    flex: 1,
  }),
  image: createResponsiveStyle({
    width: '100%',
    flexBasis: '50%',
    marginBottom: [8, 8, 12],
  }),
  row: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
});

export default BadgeTile;
