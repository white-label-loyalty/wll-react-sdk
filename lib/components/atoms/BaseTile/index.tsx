import React, { createContext, FC, ReactNode, useContext } from 'react';
import { StyleSheet, View, Image, ImageProps } from 'react-native';
import Color from 'color';
import { Text } from '../../atoms';
import { useTheme } from '../../../context/ThemeContext';
import { useSectionContext } from '../../organisms/Section';
import LoadingIndicator from '../LoadingIndicator';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Tile, TileConfig } from '../../../types/tile';

const TileContext = createContext<Tile | null>(null);

export const useTileContext = () => {
  const context = useContext(TileContext);
  if (!context) {
    throw new Error('Tile components must be used within a BaseTile');
  }
  return context;
};

type ImagePropsNoSource = Omit<ImageProps, 'source'>;

type BaseTileProps = {
  tile: Tile;
  children: ReactNode;
};

type BaseTileComponent = FC<BaseTileProps> & {
  Title: FC;
  Body: FC;
  Image: FC<ImagePropsNoSource>;
};

const BaseTileInner: FC<BaseTileProps> = ({ tile, children }) => {
  const { loading: isLoading } = useSectionContext();
  const { theme } = useTheme();

  const responsiveStyles = createResponsiveStyle({
    borderRadius: [
      theme.sizes.borderRadiusSm,
      theme.sizes.borderRadiusSm,
      theme.sizes.borderRadiusLg,
    ],
    maxWidth: [175, 175, 175],
  });

  return (
    <TileContext.Provider value={tile}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.surface,
            borderColor: Color(theme.surface).darken(0.02).string(),
            borderRadius: responsiveStyles.borderRadius,
            maxWidth: responsiveStyles.maxWidth,
          },
        ]}
      >
        {isLoading ? <LoadingIndicator /> : children}
      </View>
    </TileContext.Provider>
  );
};

const TileTitle: FC = () => {
  const tile = useTileContext();
  const { title } = tile.configuration as TileConfig & { title?: string };
  return title ? <Text variant="title">{title}</Text> : null;
};

const TileBody: FC = () => {
  const tile = useTileContext();
  const { subtitle } = tile.configuration as TileConfig & { subtitle?: string };
  return subtitle ? <Text variant="body">{subtitle}</Text> : null;
};

const TileImage: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { imageUrl, title, subtitle } = tile.configuration as TileConfig & {
    imageUrl?: string;
    title?: string;
    subtitle?: string;
  };
  if (!imageUrl) return null;
  const hasTitle = !!title;
  const hasSubtitle = !!subtitle;
  return (
    <Image
      {...props}
      source={{ uri: imageUrl }}
      style={[
        props.style,
        {
          flexBasis: hasTitle && hasSubtitle ? '50%' : '100%',
        },
      ]}
    />
  );
};

export const BaseTile = BaseTileInner as BaseTileComponent;

BaseTile.Title = TileTitle;
BaseTile.Body = TileBody;
BaseTile.Image = TileImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    position: 'relative',
    borderWidth: 1,
    aspectRatio: 1,
  },
});

export default BaseTile;
