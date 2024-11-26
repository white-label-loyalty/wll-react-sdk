import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useResponsive } from '../../../context/ResponsiveContext';
import { useWllSdk } from '../../../context/WllSdkContext';
import { TSection } from '../../../types/section';
import { Tile, TileType } from '../../../types/tile';
import { getResponsiveValue } from '../../../utils/responsiveHelper';
import { sortByPriority } from '../../../utils/transforms';
import { Icon } from '../../atoms';
import { BannerTile } from '../../organisms';
import SectionHeader from '../SectionHeader';

type CarouselProps = {
  section: TSection;
};

const Carousel: React.FC<CarouselProps> = ({ section }) => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 1080;

  const bannerTiles = section.tiles.filter(
    (tile: Tile) => tile.type === TileType.Banner
  );

  const sortedTiles = sortByPriority(bannerTiles);

  const animatedIndex = useRef(new Animated.Value(0)).current;

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const newIndex = contentOffsetX / slideWidth;
      animatedIndex.setValue(newIndex);
    },
    [slideWidth, animatedIndex]
  );

  const handleScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(contentOffsetX / slideWidth);
      setCurrentIndex(newIndex);
    },
    [slideWidth]
  );

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollViewRef.current?.scrollTo({
      x: newIndex * slideWidth,
      animated: true,
    });
  };

  const handleNext = () => {
    const newIndex = Math.min(sortedTiles.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollViewRef.current?.scrollTo({
      x: newIndex * slideWidth,
      animated: true,
    });
  };

  const displayControls = sortedTiles.length > 1;

  const dynamicStyles = StyleSheet.create({
    indicators: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: getResponsiveValue(24, 12, isDesktop, isTablet),
    },
  });

  const buttonSize = 42;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: 31,
      marginBottom: 10,
    },
    sectionDescription: {
      marginBottom: 21,
    },
    title: {
      marginBottom: 10,
    },
    description: {
      marginBottom: 20,
    },
    carouselContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carouselContent: {
      overflow: 'hidden',
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: [{ translateY: -buttonSize / 2 }],
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    navButtonLeft: {
      left: -buttonSize / 2,
    },
    navButtonRight: {
      right: -buttonSize / 2,
    },
    indicator: {
      width: 8,
      height: 8,
      borderRadius: 8,
      marginHorizontal: 4,
    },
  });

  return (
    <>
      <SectionHeader title={section.title} description={section.description} />
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          {displayControls && (
            <TouchableOpacity
              style={[
                styles.navButton,
                styles.navButtonLeft,
                { backgroundColor: theme.background },
              ]}
              onPress={handlePrev}
            >
              <Icon name="ArrowLeft" size={20} color={theme.primary} />
            </TouchableOpacity>
          )}
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleScrollEnd}
            scrollEventThrottle={16}
            style={[styles.carouselContent, { width: slideWidth }]}
            contentContainerStyle={{
              width: slideWidth * sortedTiles.length,
            }}
            decelerationRate="fast"
            snapToInterval={slideWidth}
            snapToAlignment="start"
          >
            {sortedTiles.map((tile: Tile, index: number) => (
              <View
                key={index}
                style={[
                  {
                    width: slideWidth,
                  },
                ]}
              >
                <BannerTile tile={tile} />
              </View>
            ))}
          </ScrollView>
          {displayControls && (
            <TouchableOpacity
              style={[
                styles.navButton,
                styles.navButtonRight,
                { backgroundColor: theme.surface },
              ]}
              onPress={handleNext}
            >
              <Icon name="ArrowRight" size={20} color={theme.primary} />
            </TouchableOpacity>
          )}
        </View>
        {displayControls && (
          <View style={dynamicStyles.indicators}>
            {sortedTiles.map((_, index) => {
              const width = animatedIndex.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [8, 30, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.indicator,
                    { backgroundColor: theme.derivedBackground, width },
                    index === currentIndex && {
                      backgroundColor: theme.primary,
                    },
                  ]}
                />
              );
            })}
          </View>
        )}
      </View>
    </>
  );
};

export default Carousel;
