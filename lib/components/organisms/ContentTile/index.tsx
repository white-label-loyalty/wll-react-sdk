import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ContentTileConfig } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Text, Tile } from '../../atoms';

import { useSectionContext } from '../Section';
type ContentTileProps = {
  configuration: ContentTileConfig;
};

const ContentTile: React.FC<ContentTileProps> = ({
  configuration,
}) => {
  const { loading } = useSectionContext();
  if (!configuration) return null;
  const { title, subtitle, imageUrl } = configuration;
  const responsiveStyles = {
    title: createResponsiveStyle({
      marginBottom: [4, 8, 12],
    }),
  };
  return (
    <Tile>
      <View style={styles.textContainer}>
        <Text variant="title" style={responsiveStyles.title}>
          {title}
        </Text>
        <Text variant="body">{subtitle}</Text>
      </View>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </Tile>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    position: 'relative',
    zIndex: 10,
    paddingHorizontal: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default ContentTile;
