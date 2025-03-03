import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { useTileContext } from '.';
import { useTileSize } from '../../../hooks/useTileSize';
import { WithChildren } from '../../../types/helpers';
import { ContentTileConfig } from '../../../types/tile';
import { baseStyles } from './styles';

type BaseTileContentProps = WithChildren;

/**
 * Renders the content section of a BaseTile component.
 *
 * @param {BaseTileContentProps} props - Component props
 * @param {ReactNode} props.children - Child elements to render within the content area
 * @returns {JSX.Element|null} The rendered content or null if conditions for display are not met
 */
export const BaseTileContent = ({
  children,
}: BaseTileContentProps): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!tileContext || !tileContext.configuration) return null;

  const { artworkUrl } = tileContext.configuration as ContentTileConfig;

  const sizeInfo = useTileSize(tileContext);

  if (!sizeInfo) return null;

  const { isHalfSize } = sizeInfo;

  // For half tiles with an image, don't show other content
  if (isHalfSize && artworkUrl) return null;

  return (
    <View
      testID="tile-content"
      style={[
        baseStyles.content,
        {
          justifyContent: 'center',
          height: !artworkUrl ? '100%' : undefined,
        },
      ]}
      accessibilityRole="none"
    >
      {children}
    </View>
  );
};
