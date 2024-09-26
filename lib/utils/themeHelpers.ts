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

const percentages: PercentageKey[] = [
  5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95,
];

const generateDerivedColors = (
  color: string,
  derivationFunction: (baseColor: Color, percentage: PercentageKey) => Color
): DerivedColors => {
  const baseColor = Color(color);
  const result = {} as DerivedColors;

  percentages.forEach((percentage) => {
    const derivedColor = derivationFunction(baseColor, percentage);
    result[percentage] = derivedColor.toString();
  });

  return result;
};

export const getDerivedColorPercentages = (color: string): DerivedColors => {
  const isDark = Color(color).isDark();

  return generateDerivedColors(color, (baseColor, percentage) =>
    isDark
      ? baseColor.lightness(percentage)
      : baseColor.lightness(100 - percentage)
  );
};

export const getAlphaDerivedColors = (color: string): DerivedColors => {
  return generateDerivedColors(color, (baseColor, percentage) =>
    baseColor.alpha(percentage / 100)
  );
};
