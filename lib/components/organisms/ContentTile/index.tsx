import * as React from 'react';
import { View } from 'react-native';
import { ContentTileConfig, Tile } from '../../../types/tile';
import BaseTile, { useTileContext } from '../../atoms/BaseTile';
import { useContentTileStyles } from './styles';

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

const ContentTileInner: React.FC<ContentTileProps> = ({ tile }) => {
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

const ContentTileRoot: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <BaseTile.Root>{children}</BaseTile.Root>;

const ContentTileMedia: React.FC = () => {
  const styles = useContentTileStyles();
  return <BaseTile.Media style={styles.media} />;
};

const ContentTileContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const styles = useContentTileStyles();
  return (
    <BaseTile.Content>
      <View style={styles.content}>{children}</View>
    </BaseTile.Content>
  );
};

const ContentTileHeader: React.FC = () => {
  const tile = useTileContext();
  const { title } = tile.configuration as ContentTileConfig;

  if (!title) return null;

  return (
    <BaseTile.Header>
      <BaseTile.Title />
    </BaseTile.Header>
  );
};

const ContentTileBody: React.FC = () => <BaseTile.Body />;

export const ContentTile = ContentTileInner as ContentTileComponent;

ContentTile.Root = ContentTileRoot;
ContentTile.Media = ContentTileMedia;
ContentTile.Content = ContentTileContent;
ContentTile.Header = ContentTileHeader;
ContentTile.Body = ContentTileBody;

export default ContentTile;
