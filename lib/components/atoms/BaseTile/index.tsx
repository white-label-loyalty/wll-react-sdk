import React, { createContext, FC, ReactNode, useContext } from 'react';
import { FlexStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useTileSize } from '../../../hooks/useTileSize';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Icon, ProgressiveImage, Text } from '../../atoms';

const TileContext = createContext<Tile | null>(null);

export const useTileContext = () => {
  const context = useContext(TileContext);
  if (!context) {
    throw new Error('Tile components must be used within a BaseTile');
  }
  return context;
};

type BaseTileProps = {
  tile: Tile;
  children: ReactNode;
  style?: ViewStyle;
};

type BaseTileComponent = FC<BaseTileProps> & {
  Title: FC;
  Body: FC;
  Image: FC<ImagePropsNoSource>;
};

type LayoutProps = FlexStyle & {
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
};

const BaseTileInner: FC<BaseTileProps> = ({ tile, children, style }) => {
  const { theme } = useWllSdk();
  const { isHalfSize } = useTileSize(tile);
  const { artworkUrl } = tile.configuration as ContentTileConfig;
  const layout: LayoutProps = {
    flexDirection: 'column',
    justifyContent: isHalfSize || !artworkUrl ? 'center' : 'flex-start',
    alignItems: 'stretch',
  };

  const responsiveStyles = createResponsiveStyle({
    borderRadius: [
      theme.sizes.borderRadiusSm,
      theme.sizes.borderRadiusSm,
      theme.sizes.borderRadiusLg,
    ],
  });

  return (
    <TileContext.Provider value={tile}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.surface,
            borderRadius: responsiveStyles.borderRadius,
            aspectRatio: isHalfSize ? undefined : 1,
          },
          layout,
          style,
        ]}
      >
        {children}
      </View>
    </TileContext.Provider>
  );
};

const TileTitle: FC = () => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { title, artworkUrl, linkURL } =
    tile.configuration as ContentTileConfig;

  const titleContainerStyle = createResponsiveStyle({
    marginTop: [8, 8, 12],
  });

  if (!title) return null;

  return (
    <View
      style={[
        styles.titleContainer,
        {
          marginTop: artworkUrl ? titleContainerStyle.marginTop : undefined,
        },
      ]}
      accessibilityRole="header"
    >
      <Text variant="title" accessibilityLabel={title}>
        {title}
      </Text>
      {linkURL && (
        <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
      )}
    </View>
  );
};

const TileBody: FC = (props) => {
  const tile = useTileContext();
  const { description } = tile.configuration as ContentTileConfig;
  return description ? (
    <Text variant="body" {...props} accessibilityLabel={description}>
      {description}
    </Text>
  ) : null;
};

const TileImage: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { artworkUrl, title, description } =
    tile.configuration as ContentTileConfig;
  if (!artworkUrl) return null;
  const hasTitle = !!title;
  const hasdescription = !!description;
  return (
    <ProgressiveImage
      {...props}
      source={{ uri: artworkUrl }}
      style={[
        props.style,
        {
          flexBasis: hasTitle && hasdescription ? '50%' : '100%',
        },
      ]}
    />
  );
};

export const BaseTile = BaseTileInner as BaseTileComponent;

BaseTile.Title = TileTitle;
BaseTile.Body = TileBody;
BaseTile.Image = TileImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  titleContainer: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
});

export default BaseTile;
