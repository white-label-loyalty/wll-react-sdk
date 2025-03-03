import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { useTileContext } from '.';
import { useTileSize } from '../../../hooks/useTileSize';
import { WithChildren } from '../../../types/helpers';
import { ContentTileConfig } from '../../../types/tile';
import {
  isContextValid,
  shouldHideContentForHalfTile,
} from '../../../utils/contextHelpers';
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
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl } = tileContext.configuration as ContentTileConfig;

  const sizeInfo = useTileSize(tileContext);
  if (!sizeInfo) return null;

  if (shouldHideContentForHalfTile(sizeInfo, artworkUrl)) return null;

  const dynamicStyles = useBaseTileStyles();

  const combinedStyle: ViewStyle = {
    ...dynamicStyles.header,
    marginTop: sizeInfo.isHalfSize ? 0 : dynamicStyles.header.marginTop,
    ...(sizeInfo.isHalfSize ? { alignItems: 'center' } : {}),
  };

  return (
    <View style={combinedStyle} testID="tile-header" accessibilityRole="header">
      {children}
    </View>
  );
};
