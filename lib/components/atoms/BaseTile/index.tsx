import React, { createContext, FC, ReactNode, useContext } from 'react';
import { FlexStyle, Pressable, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { useTileSize } from '../../../hooks/useTileSize';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig, Tile } from '../../../types/tile';

import { BaseTileBody } from './base-tile-body';
import { BaseTileContent } from './base-tile-content';
import { BaseTileHeader } from './base-tile-header';
import { BaseTileMedia } from './base-tile-media';
import { BaseTileTitle } from './base-tile-title';

import { baseStyles, useBaseTileStyles } from './styles';

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
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`${title}${ctaLink ? ' - Click to open' : ''}`}
    >
      {children}
    </Pressable>
  );
};

export const BaseTile = BaseTileInner as BaseTileComponent;

BaseTile.Root = BaseTileRoot;
BaseTile.Media = BaseTileMedia;
BaseTile.Content = BaseTileContent;
BaseTile.Header = BaseTileHeader;
BaseTile.Title = BaseTileTitle;
BaseTile.Body = BaseTileBody;

export default BaseTile;
