import * as React from 'react';
import { Tile } from '../../../types/tile';
import BaseTile from '../../atoms/BaseTile';

import { ContentTileBody } from './content-tile-body';
import { ContentTileContent } from './content-tile-content';
import { ContentTileHeader } from './content-tile-header';
import { ContentTileMedia } from './content-tile-media';
import { ContentTileRoot } from './content-tile-root';

type ContentTileProps = {
  tile: Tile;
};

type ContentTileComponent = React.FC<ContentTileProps> & {
  Root: typeof ContentTileRoot;
  Media: typeof ContentTileMedia;
  Content: typeof ContentTileContent;
  Header: typeof ContentTileHeader;
  Body: typeof ContentTileBody;
};

const ContentTileMain: React.FC<ContentTileProps> = ({ tile }) => {
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

export const ContentTile = ContentTileMain as ContentTileComponent;

ContentTile.Root = ContentTileRoot;
ContentTile.Media = ContentTileMedia;
ContentTile.Content = ContentTileContent;
ContentTile.Header = ContentTileHeader;
ContentTile.Body = ContentTileBody;

export default ContentTile;
