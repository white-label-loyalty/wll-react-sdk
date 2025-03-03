import React, { createContext, useContext } from 'react';
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

import { WithChildren } from '../../../types/helpers';
import { baseStyles, useBaseTileStyles } from './styles';

/**
 * Context to provide the current tile to child components.
 */
const TileContext = createContext<Tile | null>(null);

/**
 * Custom hook to access the TileContext.
 *
 * @returns {Tile} The current tile from context
 * @throws {Error} If used outside of a BaseTile
 */
export const useTileContext = (): Tile => {
  const context = useContext(TileContext);
  if (!context) {
    throw new Error('Tile components must be used within a BaseTile');
  }
  return context;
};

type BaseTileProps = WithChildren & {
  tile: Tile;
  style?: ViewStyle;
};

type BaseTileRootProps = WithChildren & {
  style?: ViewStyle;
};

type LayoutProps = FlexStyle & {
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
};

/**
 * BaseTileContainer component to handle layout and pressable behavior.
 *
 * @param {BaseTileRootProps} props - Component props
 * @returns {JSX.Element} The rendered BaseTileContainer
 */
const BaseTileContainer = ({
  children,
  style,
}: BaseTileRootProps): JSX.Element => {
  const tile = useTileContext();
  const sdk = useWllSdk();
  const sizeInfo = useTileSize(tile);

  const isHalfSize = sizeInfo?.isHalfSize || false;

  const {
    ctaLink = '',
    ctaLinkTarget,
    title = 'Tile',
  } = tile.configuration as ContentTileConfig;

  const theme = sdk?.theme || { surface: '#ffffff' };

  const handlePress = useHandleTilePress(tile, ctaLink, ctaLinkTarget);

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
      accessibilityState={{ disabled: !ctaLink }}
    >
      {children}
    </Pressable>
  );
};

/**
 * BaseTileRoot component to provide context and render children.
 *
 * @param {BaseTileProps} props - Component props
 * @returns {JSX.Element|null} The rendered BaseTileRoot or null if no tile is provided
 */
const BaseTileRoot = ({
  tile,
  children,
  style,
}: BaseTileProps): JSX.Element | null => {
  if (!tile) {
    console.warn('BaseTile: No tile provided');
    return null;
  }

  return (
    <TileContext.Provider value={tile}>
      <BaseTile.Container style={style}>{children}</BaseTile.Container>
    </TileContext.Provider>
  );
};

/**
 * BaseTile component with subcomponents attached.
 */
export const BaseTile = Object.assign(BaseTileRoot, {
  Container: BaseTileContainer,
  Media: BaseTileMedia,
  Content: BaseTileContent,
  Header: BaseTileHeader,
  Title: BaseTileTitle,
  Body: BaseTileBody,
});

export default BaseTile;
