import React, { createContext, FC, ReactNode, useContext } from 'react';
import {
  FlexStyle,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { useResponsive } from '../../../hooks/useResponsive';
import { useTileSize } from '../../../hooks/useTileSize';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig, Tile } from '../../../types/tile';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
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
  const { ctaLink, ctaLinkTarget, title } =
    tile.configuration as ContentTileConfig;
  const handlePress = useHandleTilePress(tile, ctaLink, ctaLinkTarget);
  const { isDesktop, isTablet } = useResponsive();

  const layout: LayoutProps = {
    flexDirection: 'column',
    justifyContent: isHalfSize ? 'center' : 'flex-start',
    alignItems: 'stretch',
  };

  const dynamicStyles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: isHalfSize ? 2 : 1,
      borderRadius: useResponsiveValue(
        theme.sizes.borderRadiusLg,
        theme.sizes.borderRadiusSm,
        isDesktop,
        isTablet
      ),
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: theme.surface,
          opacity: pressed ? 0.7 : 1,
        },
        dynamicStyles.container,
        layout,
        style,
      ]}
      onPress={handlePress}
      disabled={
        tile.type !== 'REWARD' && tile.type !== 'REWARD_CATEGORY' && !ctaLink
      }
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`${title}${ctaLink ? ' - Click to open' : ''}`}
    >
      {children}
    </Pressable>
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
        {
          justifyContent: 'center',
          height: !artworkUrl ? '100%' : undefined,
        },
      ]}
    >
      {children}
    </View>
  );
};

const BaseTileHeader: FC<{ children?: ReactNode }> = ({ children }) => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);
  const { isDesktop, isTablet } = useResponsive();

  // For half tiles with an image, don't show header
  if (isHalfSize && artworkUrl) return null;

  const dynamicStyles = StyleSheet.create({
    header: {
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
      marginTop: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  return (
    <View
      style={[
        dynamicStyles.header,
        {
          marginTop: isHalfSize ? 0 : dynamicStyles.header.marginTop,
          // @ts-ignore
          textAlign: isHalfSize && 'center',
        },
      ]}
      accessibilityRole="header"
      numberOfLines={1}
    >
      {children}
    </View>
  );
};

const BaseTileMedia: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { artworkUrl, title, body } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  if (!artworkUrl) return null;

  const hasTitle = !!title;
  const hasDescription = !!body;

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
  const { title, ctaLink, artworkUrl } =
    tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  // Don't show title for half tiles with image
  if ((isHalfSize && artworkUrl) || !title) return null;

  return (
    <>
      <Text variant="title" accessibilityLabel={title} numberOfLines={1}>
        {title}
      </Text>
      {ctaLink && (
        <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
      )}
    </>
  );
};

const BaseTileBody: FC = (props) => {
  const tile = useTileContext();
  const { isDesktop, isTablet } = useResponsive();
  const { body, artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  if ((isHalfSize && artworkUrl) || !body) return null;

  return (
    <Text
      variant="body"
      {...props}
      accessibilityLabel={body}
      numberOfLines={isDesktop ? 3 : isTablet ? 2 : 3}
    >
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
});

export default BaseTile;
