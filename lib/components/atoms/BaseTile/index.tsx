import React, { createContext, FC, ReactNode, useContext } from 'react';
import { FlexStyle, Image, StyleSheet, View, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { ImagePropsNoSource } from '../../../types/common';
import { Tile, TileConfig, TileHeight } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Icon, Text } from '../../atoms';

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

  const layout: LayoutProps = {
    flexDirection: 'column',
    justifyContent:
      tile.tileHeight === TileHeight.Half ? 'center' : 'flex-start',
    alignItems: 'stretch',
  };
  const responsiveStyles = createResponsiveStyle({
    borderRadius: [
      theme.sizes.borderRadiusSm,
      theme.sizes.borderRadiusSm,
      theme.sizes.borderRadiusLg,
    ],
    maxWidth: [175, 175, 258],
    backgroundColor: tile.tileHeight === 'FULL' ? 'red' : 'blue',
  });

  return (
    <TileContext.Provider value={tile}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.surface,
            borderRadius: responsiveStyles.borderRadius,
            maxWidth: responsiveStyles.maxWidth,
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
  const { title, imageUrl, linkURL } = tile.configuration as TileConfig & {
    title?: string;
    linkURL?: string;
    imageUrl?: string;
  };

  const titleContainerStyle = createResponsiveStyle({
    marginTop: [8, 8, 12],
  });

  if (!title) return null;

  return (
    <View
      style={[
        styles.titleContainer,
        {
          marginTop: imageUrl ? titleContainerStyle.marginTop : undefined,
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
  const { subtitle } = tile.configuration as TileConfig & { subtitle?: string };
  return subtitle ? (
    <Text variant="body" {...props} accessibilityLabel={subtitle}>
      {subtitle}
    </Text>
  ) : null;
};

const TileImage: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { imageUrl, title, subtitle } = tile.configuration as TileConfig & {
    imageUrl?: string;
    title?: string;
    subtitle?: string;
  };
  if (!imageUrl) return null;
  const hasTitle = !!title;
  const hasSubtitle = !!subtitle;
  return (
    <Image
      {...props}
      source={{ uri: imageUrl }}
      style={[
        props.style,
        {
          flexBasis: hasTitle && hasSubtitle ? '50%' : '100%',
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
    aspectRatio: 1,
  },
  titleContainer: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
});

export default BaseTile;
