import React, { createContext, FC, ReactNode, useContext } from 'react';
import { FlexStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useTileSize } from '../../../hooks/useTileSize';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import Icon from '../Icon';
import ProgressiveImage from '../ProgressiveImage';
import Text from '../Text';

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
    // Center content vertically for half tiles, start at top for full tiles
    justifyContent: isHalfSize ? 'center' : 'flex-start',
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
          aspectRatio: isHalfSize ? 2 : 1,
        },
        layout,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const BaseTileContent: FC<{ children: ReactNode }> = ({ children }) => {
  const tile = useTileContext();
  const { artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  // For half tiles with an image, don't show other content
  if (isHalfSize && artworkUrl) return null;

  return (
    <View
      style={[
        styles.content,
        isHalfSize && {
          justifyContent: 'center',
          padding: 16,
        },
      ]}
    >
      {children}
    </View>
  );
};

const BaseTileHeader: FC<{ children?: ReactNode }> = ({ children }) => {
  const tile = useTileContext();
  const { artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  // For half tiles with an image, don't show header
  if (isHalfSize && artworkUrl) return null;

  const headerStyle = createResponsiveStyle({
    marginTop: [8, 8, 12],
  });

  return (
    <View
      style={[
        styles.header,
        {
          marginTop:
            !isHalfSize && artworkUrl ? headerStyle.marginTop : undefined,
          // @ts-ignore
          textAlign: isHalfSize && 'center',
        },
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
  const { isHalfSize } = useTileSize(tile);

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
          flexBasis: !isHalfSize && hasTitle && hasDescription ? '50%' : '100%',
          height: isHalfSize ? '100%' : undefined,
        },
      ]}
    />
  );
};

const BaseTileTitle: FC = () => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { title, linkURL, artworkUrl } =
    tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  // Don't show title for half tiles with image
  if ((isHalfSize && artworkUrl) || !title) return null;

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
  const { body, artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  if ((isHalfSize && artworkUrl) || !body) return null;

  return (
    <Text variant="body" {...props} accessibilityLabel={body}>
      {body}
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
    display: 'flex',
  },
  media: {
    width: '100%',
    objectFit: 'cover',
  },
  header: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
});

export default BaseTile;
