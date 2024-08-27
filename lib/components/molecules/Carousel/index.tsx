import { Icon } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import { BannerTile } from "@/components/organisms/";
import { useTheme } from "@/context/ThemeContext";
import { Section } from "@/types/section";
import { BannerTileConfig, Tile, TileType } from "@/types/tile";
import React, { useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type CarouselProps = {
  section: Section;
};

const Carousel: React.FC<CarouselProps> = ({ section }) => {
  const { theme } = useTheme();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 1080;

  const bannerTiles = section.tiles.filter(
    (tile: Tile) => tile.type === TileType.Banner
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / slideWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / slideWidth);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollViewRef.current?.scrollTo({
      x: newIndex * slideWidth,
      animated: true,
    });
  };

  const handleNext = () => {
    const newIndex = Math.min(bannerTiles.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollViewRef.current?.scrollTo({
      x: newIndex * slideWidth,
      animated: true,
    });
  };

  const displayControls = bannerTiles.length > 1;

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
            contentContainerStyle={{ width: slideWidth * bannerTiles.length }}
            decelerationRate="fast"
            snapToInterval={slideWidth}
            snapToAlignment="start"
          >
            {bannerTiles.map((tile: Tile, index: number) => {
              const configuration = tile.configuration as BannerTileConfig;
              return (
                <View
                  key={index}
                  style={[
                    {
                      width: slideWidth,
                    },
                  ]}
                >
                  <BannerTile configuration={configuration} />
                </View>
              );
            })}
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
          <View style={styles.indicators}>
            {bannerTiles.map((_: Tile, index: number) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  { backgroundColor: theme.derivedBackground },
                  index === currentIndex && [
                    styles.activeIndicator,
                    { backgroundColor: theme.primary },
                  ],
                ]}
              />
            ))}
          </View>
        )}
      </View>
    </>
  );
};
const buttonSize = 30;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 1080,
    alignSelf: "center",
    position: "relative",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselContent: {
    overflow: "hidden",
  },
  slide: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  slideContent: {
    padding: 20,
    flex: 1,
  },
  imageContainer: {
    width: "20%",
    aspectRatio: 1,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  navButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    width: buttonSize,
    height: buttonSize,
    position: "absolute",
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  navButtonLeft: {
    left: -buttonSize / 2,
  },
  navButtonRight: {
    right: -buttonSize / 2,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 30,
  },
});

export default Carousel;
