export const getResponsiveValue = (
  desktopValue: number,
  mobileValue: number,
  isDesktop: boolean,
  isTablet: boolean
) => {
  if (isDesktop) return desktopValue;
  if (isTablet) return Math.round((desktopValue + mobileValue) / 2); // Tablet gets the middle value
  return mobileValue;
};
