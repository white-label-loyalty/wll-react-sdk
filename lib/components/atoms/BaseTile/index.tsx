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
  Root: FC<{ children: ReactNode; style?: ViewStyle }>;
  Media: FC<ImagePropsNoSource>;
  Content: FC<{ children: ReactNode }>;
  Header: FC<{ children?: ReactNode }>;
  Title: FC;
  Body: FC;
};

type LayoutProps = FlexStyle & {
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
};

const BaseTileInner: FC<BaseTileProps> = ({ tile, children }) => {
  return (
    <TileContext.Provider value={tile}>
      <BaseTile.Root>{children}</BaseTile.Root>
    </TileContext.Provider>
  );
};

const BaseTileRoot: FC<{ children: ReactNode; style?: ViewStyle }> = ({
  children,
  style,
}) => {
  const tile = useTileContext();
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
  );
};

const BaseTileContent: FC<{ children: ReactNode }> = ({ children }) => (
  <View style={styles.content}>{children}</View>
);

const BaseTileHeader: FC<{ children?: ReactNode }> = ({ children }) => {
  const tile = useTileContext();
  const { artworkUrl } = tile.configuration as ContentTileConfig;

  const headerStyle = createResponsiveStyle({
    marginTop: [8, 8, 12],
  });

  return (
    <View
      style={[
        styles.header,
        { marginTop: artworkUrl ? headerStyle.marginTop : undefined },
      ]}
      accessibilityRole="header"
    >
      {children}
    </View>
  );
};

const BaseTileMedia: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { artworkUrl, title, description } =
    tile.configuration as ContentTileConfig;

  if (!artworkUrl) return null;

  const hasTitle = !!title;
  const hasDescription = !!description;

  return (
    <ProgressiveImage
      {...props}
      source={{ uri: artworkUrl }}
      style={[
        props.style,
        styles.media,
        {
          flexBasis: hasTitle && hasDescription ? '50%' : '100%',
        },
      ]}
    />
  );
};

const BaseTileTitle: FC = () => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { title, linkURL } = tile.configuration as ContentTileConfig;

  if (!title) return null;

  return (
    <>
      <Text variant="title" accessibilityLabel={title}>
        {title}
      </Text>
      {linkURL && (
        <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
      )}
    </>
  );
};

const BaseTileBody: FC = (props) => {
  const tile = useTileContext();
  const { description } = tile.configuration as ContentTileConfig;

  if (!description) return null;

  return (
    <Text variant="body" {...props} accessibilityLabel={description}>
      {description}
    </Text>
  );
};

export const BaseTile = BaseTileInner as BaseTileComponent;

BaseTile.Root = BaseTileRoot;
BaseTile.Media = BaseTileMedia;
BaseTile.Content = BaseTileContent;
BaseTile.Header = BaseTileHeader;
BaseTile.Title = BaseTileTitle;
BaseTile.Body = BaseTileBody;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    flex: 1,
  },
  media: {
    width: '100%',
  },
  header: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
});

export default BaseTile;
