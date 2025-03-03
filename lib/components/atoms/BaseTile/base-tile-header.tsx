import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { useTileContext } from '.';
import { useTileSize } from '../../../hooks/useTileSize';
import { WithChildren } from '../../../types/helpers';
import { ContentTileConfig } from '../../../types/tile';
import { useBaseTileStyles } from './styles';

type BaseTileHeaderProps = WithChildren;

/**
 * Renders the header section of a BaseTile component.
 *
 * @param {BaseTileHeaderProps} props - Component props
 * @param {ReactNode} props.children - Child elements to render within the header
 * @returns {JSX.Element|null} The rendered header or null if conditions for display are not met
 */
export const BaseTileHeader = ({
  children,
}: BaseTileHeaderProps): JSX.Element | null => {
  const tile = useTileContext();

  if (!tile || !tile.configuration) return null;

  const { artworkUrl } = tile.configuration as ContentTileConfig;

  const sizeInfo = useTileSize(tile);
  if (!sizeInfo) return null;

  const { isHalfSize } = sizeInfo;

  // For half tiles with an image, don't show header
  if (isHalfSize && artworkUrl) return null;

  const dynamicStyles = useBaseTileStyles();

  const combinedStyle: ViewStyle = {
    ...dynamicStyles.header,
    marginTop: isHalfSize ? 0 : dynamicStyles.header.marginTop,
    ...(isHalfSize ? { alignItems: 'center' } : {}),
  };

  return (
    <View style={combinedStyle} testID="tile-header" accessibilityRole="header">
      {children}
    </View>
  );
};
