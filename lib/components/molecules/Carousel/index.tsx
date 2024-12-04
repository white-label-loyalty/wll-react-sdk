import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { BUTTON_SIZE } from '../../../constants';
import { useResponsive } from '../../../context/ResponsiveContext';
import { useWllSdk } from '../../../context/WllSdkContext';
import { TSection } from '../../../types/section';
import { Tile, TileType } from '../../../types/tile';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
import { sortByPriority } from '../../../utils/transforms';
import { Icon } from '../../atoms';
import { BannerTile } from '../../organisms';
import SectionHeader from '../SectionHeader';
import { useCarouselStyles } from './styles';

type CarouselProps = {
  section: TSection;
};

const Carousel: React.FC<CarouselProps> = ({ section }) => {
  const { width: windowWidth } = useWindowDimensions();
  const containerRef = useRef<View>(null);
  const [containerWidth, setContainerWidth] = useState(windowWidth);
  const styles = useCarouselStyles(BUTTON_SIZE);
  const animatedIndex = useRef(new Animated.Value(0)).current;
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerTiles = section.tiles.filter(
    (tile: Tile) => tile.type === TileType.Banner
  );
  const sortedTiles = sortByPriority(bannerTiles);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const newIndex = contentOffsetX / containerWidth;
      animatedIndex.setValue(newIndex);
    },
    [containerWidth, animatedIndex]
  );

  const handleScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(contentOffsetX / containerWidth);
      setCurrentIndex(newIndex);
    },
    [containerWidth]
  );

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollViewRef.current?.scrollTo({
      x: newIndex * containerWidth,
      animated: true,
    });
  };

  const handleNext = () => {
    const newIndex = Math.min(sortedTiles.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollViewRef.current?.scrollTo({
      x: newIndex * containerWidth,
      animated: true,
    });
  };

  const displayControls = sortedTiles.length > 1;

  const dynamicStyles = StyleSheet.create({
    indicators: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: useResponsiveValue(
        theme.sizes.xxl,
        theme.sizes.sm,
        isDesktop,
        isTablet
      ),
    },
  });

  return (
    <>
      <SectionHeader title={section.title} description={section.description} />
      <View
        ref={containerRef}
        style={styles.container}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setContainerWidth(width);
        }}
      >
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
            style={[styles.carouselContent]}
            contentContainerStyle={{
              width: containerWidth * sortedTiles.length,
            }}
            decelerationRate="fast"
            snapToInterval={containerWidth}
            snapToAlignment="start"
          >
            {sortedTiles.map((tile: Tile, index: number) => (
              <View
                key={index}
                style={[
                  styles.slideContainer,
                  {
                    width: containerWidth,
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
