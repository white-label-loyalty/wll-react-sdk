import React, { createContext, ReactNode, useContext } from 'react';
import { FlexStyle, Pressable, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig, Tile } from '../../../types/tile';

import { BaseTileBody } from './base-tile-body';
import { BaseTileContent } from './base-tile-content';
import { BaseTileHeader } from './base-tile-header';
import { BaseTileMedia } from './base-tile-media';
import { BaseTileTitle } from './base-tile-title';

import { baseStyles, useBaseTileStyles } from './styles';

/**
 * Context to provide the current tile to child components.
 */
const TileContext = createContext<Tile | null>(null);

/**
 * Custom hook to access the TileContext.
 */
export const useTileContext = (): Tile => {
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

type BaseTileRootProps = {
  children: ReactNode;
  style?: ViewStyle;
};

type LayoutProps = FlexStyle & {
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
};

/**
 * BaseTileRoot component to handle layout and pressable behavior.
 */
const BaseTileRoot = ({ children, style }: BaseTileRootProps): JSX.Element => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { isHalfSize } = useTileSize(tile);
  const { ctaLink, ctaLinkTarget, title } =
    tile.configuration as ContentTileConfig;
  const handlePress = useHandleTilePress(tile, ctaLink, ctaLinkTarget);

  // Dynamic layout and styles
  const layout: LayoutProps = {
    flexDirection: 'column',
    justifyContent: isHalfSize ? 'center' : 'flex-start',
    alignItems: 'stretch',
  };

  const dynamicStyles = useBaseTileStyles();

  return (
    <Pressable
      style={({ pressed }) => [
        baseStyles.container,
        dynamicStyles.container,
        {
          backgroundColor: theme.surface,
          opacity: pressed ? 0.7 : 1,
        },
        layout,
        style,
      ]}
      onPress={handlePress}
      disabled={
        tile.type !== 'REWARD' && tile.type !== 'REWARD_CATEGORY' && !ctaLink
      }
      accessible
      accessibilityRole="button"
      accessibilityLabel={`${title}${ctaLink ? ' - Click to open' : ''}`}
    >
      {children}
    </Pressable>
  );
};

/**
 * BaseTileInner component to provide context and render children.
 */
const BaseTileInner = ({ tile, children }: BaseTileProps): JSX.Element => {
  return (
    <TileContext.Provider value={tile}>
      <BaseTile.Root>{children}</BaseTile.Root>
    </TileContext.Provider>
  );
};

/**
 * BaseTile component with subcomponents attached.
 */
export const BaseTile = Object.assign(BaseTileInner, {
  Root: BaseTileRoot,
  Media: BaseTileMedia,
  Content: BaseTileContent,
  Header: BaseTileHeader,
  Title: BaseTileTitle,
  Body: BaseTileBody,
});

export default BaseTile;
