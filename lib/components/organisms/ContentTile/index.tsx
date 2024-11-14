import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import BaseTile from '../../atoms/BaseTile';

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

const ContentTileMedia: React.FC = () => (
  <BaseTile.Media style={styles.media} />
);

const ContentTileContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <BaseTile.Content>
    <View style={styles.content}>{children}</View>
  </BaseTile.Content>
);

const ContentTileHeader: React.FC = () => (
  <BaseTile.Header>
    <BaseTile.Title />
  </BaseTile.Header>
);

const ContentTileBody: React.FC = () => <BaseTile.Body />;

const styles = StyleSheet.create({
  content: createResponsiveStyle({
    paddingHorizontal: [8, 8, 12],
    flex: 1,
    justifyContent: 'center',
  }),
  media: createResponsiveStyle({
    width: '100%',
  }),
});

export const ContentTile = ContentTileInner as ContentTileComponent;

ContentTile.Root = ContentTileRoot;
ContentTile.Media = ContentTileMedia;
ContentTile.Content = ContentTileContent;
ContentTile.Header = ContentTileHeader;
ContentTile.Body = ContentTileBody;

export default ContentTile;
