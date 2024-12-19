import React from 'react';
import { Tile } from '../../../types/tile';
import BaseTile from '../../atoms/BaseTile';
import { withTileFetching } from '../../hoc/withTileFetching';
import { ContentTileBody } from './content-tile-body';
import { ContentTileContent } from './content-tile-content';
import { ContentTileHeader } from './content-tile-header';
import { ContentTileMedia } from './content-tile-media';
import { ContentTileRoot } from './content-tile-root';

type ContentTileProps = {
  tile: Tile;
};

/**
 * The ContentTile component renders a tile with a root, media, content, header, and body.
 *
 * @param tile - The tile data to render.
 */
const ContentTileMain = ({ tile }: ContentTileProps): JSX.Element | null => {
  if (!tile) return null;

  return (
    <BaseTile tile={tile}>
      <ContentTile.Root>
        <ContentTile.Media />
        <ContentTile.Content>
          <ContentTile.Header />
          <ContentTile.Body />
        </ContentTile.Content>
      </ContentTile.Root>
    </BaseTile>
  );
};

/**
 * The ContentTile component with subcomponents attached.
 */
export const ContentTile = Object.assign(ContentTileMain, {
  Root: ContentTileRoot,
  Media: ContentTileMedia,
  Content: ContentTileContent,
  Header: ContentTileHeader,
  Body: ContentTileBody,
});

export default withTileFetching(ContentTile);
