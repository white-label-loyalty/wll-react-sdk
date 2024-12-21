import React, { createContext, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig, Tile } from '../../../types/tile';

const BannerContext = createContext<Tile | null>(null);

export const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error('Banner components must be used within a BaseBanner');
  }
  return context;
};

type BaseBannerProps = {
  tile: Tile;
  children: React.ReactNode;
};

const BaseBanner = ({ tile, children }: BaseBannerProps): JSX.Element => {
  const { theme } = useWllSdk();
  const { ctaLink, ctaLinkTarget, title } =
    tile.configuration as BannerTileConfig;

  const handlePress = useHandleTilePress(tile, ctaLink, ctaLinkTarget);

  return (
    <BannerContext.Provider value={tile}>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: theme.surface,
            borderRadius: theme.sizes.borderRadiusLg,
            opacity: pressed ? 0.7 : 1,
          },
        ]}
        onPress={handlePress}
        disabled={!ctaLink}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`${title}${ctaLink ? ' - Click to open' : ''}`}
      >
        {children}
      </Pressable>
    </BannerContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
});

export default BaseBanner;
