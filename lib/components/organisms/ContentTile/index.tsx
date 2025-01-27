import React from 'react';
import { Tile } from '../../../types/tile';
import BaseTile from '../../atoms/BaseTile';
import { withTileFetching } from '../../hoc/withTileFetching';
import { ContentTileBody } from './content-tile-body';
import { ContentTileContainer } from './content-tile-container';
import { ContentTileContent } from './content-tile-content';
import { ContentTileHeader } from './content-tile-header';
import { ContentTileMedia } from './content-tile-media';

type ContentTileProps = {
  tile: Tile;
};

/**
 * The ContentTile component renders a tile with a container, media, content, header, and body.
 *
 * @param tile - The tile data to render.
 */
const ContentTileRoot = ({ tile }: ContentTileProps): JSX.Element | null => {
  if (!tile || !tile.active) return null;

  return (
    <BaseTile tile={tile}>
      <ContentTile.Container>
        <ContentTile.Media />
        <ContentTile.Content>
          <ContentTile.Header />
          <ContentTile.Body />
        </ContentTile.Content>
      </ContentTile.Container>
    </BaseTile>
  );
};

/**
 * The ContentTile component with subcomponents attached.
 */
export const ContentTile = Object.assign(ContentTileRoot, {
  Container: ContentTileContainer,
  Media: ContentTileMedia,
  Content: ContentTileContent,
  Header: ContentTileHeader,
  Body: ContentTileBody,
});

export default withTileFetching(ContentTile);
