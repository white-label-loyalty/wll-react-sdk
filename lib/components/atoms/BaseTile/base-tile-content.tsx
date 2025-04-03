import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { useTileContext } from '.';
import { useTileSize } from '../../../hooks/useTileSize';
import { WithChildren } from '../../../types/helpers';
import { ContentTileConfig } from '../../../types/tile';
import {
  isContextValid,
  shouldHideContentForHalfTile,
} from '../../../utils/contextHelpers';
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

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl } = tileContext.configuration as ContentTileConfig;

  const sizeInfo = useTileSize(tileContext);

  if (!sizeInfo) return null;

  if (shouldHideContentForHalfTile(sizeInfo, artworkUrl)) return null;

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
      role="none"
    >
      {children}
    </View>
  );
};
