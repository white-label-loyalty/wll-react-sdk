import Color from 'color';

export const getDerivedColor = (color: string): string => {
  const backgroundColor = Color(color);
  return backgroundColor.isDark()
    ? backgroundColor.lighten(0.2).string()
    : backgroundColor.darken(0.2).string();
};

export const getReadableTextColor = (backgroundColor: string): string => {
  const bgColor = Color(backgroundColor);
  const white = Color('#fff');
  const black = Color('#000');

  // Calculate contrast ratio with white
  const contrastWithWhite = bgColor.contrast(white);

  // If contrast with white is at least 2:1, use white; otherwise, use black
  return contrastWithWhite >= 2 ? white.hex() : black.hex();
};

type PercentageKey = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95;

export type DerivedColors = {
  [K in PercentageKey]: string;
};

export const getDerivedColorPercentages = (color: string): DerivedColors => {
  const baseColor = Color(color);
  const isDark = baseColor.isDark();
  const percentages: PercentageKey[] = [
    5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95,
  ];
  const result = {} as DerivedColors;

  percentages.forEach((percentage) => {
    let derivedColor: Color;
    if (isDark) {
      // For dark colors, set lightness directly
      derivedColor = baseColor.lightness(percentage);
    } else {
      // For light colors, invert the percentage
      derivedColor = baseColor.lightness(100 - percentage);
    }
    result[percentage] = derivedColor.hex();
  });

  return result;
};

type AlphaPercentageKey = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
export type AlphaDerivedColors = {
  [key in AlphaPercentageKey]: string;
};

export const getAlphaDerivedColors = (color: string): AlphaDerivedColors => {
  const baseColor = Color(color);
  const percentages: AlphaPercentageKey[] = [
    10, 20, 30, 40, 50, 60, 70, 80, 90,
  ];
  const result = {} as AlphaDerivedColors;

  percentages.forEach((percentage) => {
    const alphaValue = percentage / 100;
    const derivedColor = baseColor.alpha(alphaValue);
    result[percentage] = derivedColor.rgb().string();
  });

  return result;
};
