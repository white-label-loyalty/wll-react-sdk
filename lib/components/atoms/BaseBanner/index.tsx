import React, { createContext, useContext } from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
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
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
};

const BaseBanner: React.FC<BaseBannerProps> = ({
  tile,
  children,
  style,
  testID,
  accessibilityLabel,
}): JSX.Element => {
  const { theme } = useWllSdk();
  const { ctaLink, ctaLinkTarget, title, ctaText } =
    tile.configuration as BannerTileConfig;

  const handlePress = useHandleTilePress(tile, ctaLink, ctaLinkTarget);
  const hasCTA = Boolean(ctaText);

  return (
    <BannerContext.Provider value={tile}>
      <Pressable
        testID={testID || 'banner-tile'}
        style={({ pressed }) => [
          styles.container,
          style,
          {
            backgroundColor: theme.surface,
            borderRadius: theme.sizes.borderRadiusLg,
            opacity: pressed ? 0.7 : 1,
          },
        ]}
        onPress={hasCTA ? undefined : handlePress}
        disabled={!ctaLink || hasCTA}
        accessible={true}
        role={hasCTA ? 'article' : 'button'}
        accessibilityLabel={
          accessibilityLabel ||
          `${title}${!hasCTA && ctaLink ? ' - Click to open' : ''}`
        }
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
