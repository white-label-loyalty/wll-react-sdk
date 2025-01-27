import React, { useCallback, useRef } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
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
  section?: TSection;
};

type CarouselState = {
  currentIndex: number;
  containerWidth: number;
};

type CarouselAction =
  | { type: 'SET_CONTAINER_WIDTH'; payload: number }
  | { type: 'SET_CURRENT_INDEX'; payload: number }
  | { type: 'PREV_SLIDE' }
  | { type: 'NEXT_SLIDE'; maxIndex: number };

const initialState: CarouselState = {
  currentIndex: 0,
  containerWidth: 0,
};

const carouselReducer = (
  state: CarouselState,
  action: CarouselAction
): CarouselState => {
  switch (action.type) {
    case 'SET_CONTAINER_WIDTH':
      return { ...state, containerWidth: action.payload };
    case 'SET_CURRENT_INDEX':
      return { ...state, currentIndex: action.payload };
    case 'PREV_SLIDE':
      return { ...state, currentIndex: Math.max(0, state.currentIndex - 1) };
    case 'NEXT_SLIDE':
      return {
        ...state,
        currentIndex: Math.min(action.maxIndex, state.currentIndex + 1),
      };
    default:
      return state;
  }
};

const Carousel = ({ section }: CarouselProps): JSX.Element | null => {
  if (!section) return null;
  const { width: WINDOW_WIDTH } = useWindowDimensions();
  const containerRef = useRef<View>(null);
  const styles = useCarouselStyles(BUTTON_SIZE);
  const animatedIndex = useRef(new Animated.Value(0)).current;
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();
  const scrollViewRef = useRef<ScrollView>(null);

  const [state, dispatch] = React.useReducer(carouselReducer, {
    ...initialState,
    containerWidth: WINDOW_WIDTH,
  });

  const { currentIndex, containerWidth } = state;

  const sortedTiles = sortByPriority(
    section.tiles.filter((tile: Tile) => tile.type === TileType.Banner)
  );

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
      dispatch({ type: 'SET_CURRENT_INDEX', payload: newIndex });
    },
    [containerWidth]
  );

  const handlePrev = () => {
    dispatch({ type: 'PREV_SLIDE' });
    scrollViewRef.current?.scrollTo({
      x: (currentIndex - 1) * containerWidth,
      animated: true,
    });
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT_SLIDE', maxIndex: sortedTiles.length - 1 });
    scrollViewRef.current?.scrollTo({
      x: (currentIndex + 1) * containerWidth,
      animated: true,
    });
  };

  const displayControls = sortedTiles.length > 1;
  const showPrevButton = displayControls && currentIndex > 0;
  const showNextButton =
    displayControls && currentIndex < sortedTiles.length - 1;

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
          dispatch({ type: 'SET_CONTAINER_WIDTH', payload: width });
        }}
      >
        <View style={styles.carouselContainer}>
          {showPrevButton && (
            <Pressable
              style={[
                styles.navButton,
                styles.navButtonLeft,
                { backgroundColor: theme.background },
              ]}
              onPress={handlePrev}
              accessibilityLabel="Previous slide"
              role="button"
            >
              <Icon name="ArrowLeft" size={20} color={theme.primary} />
            </Pressable>
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
          {showNextButton && (
            <Pressable
              style={[
                styles.navButton,
                styles.navButtonRight,
                { backgroundColor: theme.background },
              ]}
              onPress={handleNext}
              accessibilityLabel="Next slide"
              role="button"
            >
              <Icon name="ArrowRight" size={20} color={theme.primary} />
            </Pressable>
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
