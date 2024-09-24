import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Tile } from '../../../types/tile';

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
  return (
    <BannerContext.Provider value={tile}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.surface,
            borderRadius: theme.sizes.borderRadiusLg,
          },
        ]}
      >
        {children}
      </View>
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
