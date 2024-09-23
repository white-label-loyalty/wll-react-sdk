import Color from 'color';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useSectionContext } from '../../organisms/Section';
import LoadingIndicator from '../LoadingIndicator';

type TileProps = {
  children: React.ReactNode;
};

const Tile: React.FC<TileProps> = ({ children }) => {
  const { loading: isLoading } = useSectionContext();
  const { theme } = useWllSdk();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderColor: Color(theme.surface).darken(0.02).string(),
          borderRadius: theme.sizes.borderRadius,
        },
      ]}
    >
      {isLoading ? <LoadingIndicator /> : children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
    maxWidth: 270,
    borderWidth: 1,
    aspectRatio: 1,
    // shadowColor: "#AAAAAA",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3,
  },
});

export default Tile;
