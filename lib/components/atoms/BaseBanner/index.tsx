import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig, Tile } from '../../../types/tile';

const BannerContext = React.createContext<Tile | null>(null);

export const useBannerContext = () => {
  const context = React.useContext(BannerContext);
  if (!context) {
    throw new Error('Tile components must be used within a BaseTile');
  }
  return context;
};

type BaseBannerProps = {
  tile: Tile;
  children: React.ReactNode;
};

const BaseBanner: React.FC<BaseBannerProps> = ({ tile, children }) => {
  const { theme } = useWllSdk();
  const { ctaLink, ctaLinkTarget, title } =
    tile.configuration as BannerTileConfig;

  const handlePress = useHandleTilePress(ctaLink, ctaLinkTarget);

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
    maxWidth: 1080,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
});

export default BaseBanner;
