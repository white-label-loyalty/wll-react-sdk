import Color from "color";

export const getDerivedColor = (color: string): string => {
  const backgroundColor = Color(color);
  return backgroundColor.isDark()
    ? backgroundColor.lighten(0.2).string()
    : backgroundColor.darken(0.2).string();
};

export const getReadableTextColor = (color: string): string => {
  const backgroundColor = Color(color);
  return backgroundColor.isDark() ? "#ffffff" : "#000000";
};
