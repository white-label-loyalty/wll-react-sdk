import { Tile } from '../types/tile';

/**
 * Sorts tiles by priority (higher priority first) and maintains original order for equal priorities
 * @param tiles Array of tiles to sort
 * @returns Sorted array of tiles
 */
export const sortByPriority = <T extends Pick<Tile, 'priority'>>(
  tiles: T[]
): T[] => {
  return [...tiles].sort((a, b) => {
    // Sort by priority (higher priority first)
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }
    // If priorities are equal, maintain original order
    return tiles.indexOf(a) - tiles.indexOf(b);
  });
};

/**
 * Transforms locale to a locale that is supported by the browser
 * @param locale Locale to transform
 * @returns Transformed locale
 */
export const transformLocale = (locale: string) => {
  const localeMapping = {
    en: 'en-GB',
    fr: 'fr-FR',
    es: 'es-ES',
    de: 'de-DE',
    it: 'it-IT',
    pt: 'pt-PT',
    us: 'en-US',
  };

  return localeMapping[(locale ?? 'en') as keyof typeof localeMapping];
};

/**
 * Handles the last earned date by formatting it to a locale date string
 * @param date Date string to format
 * @param userLocale User's locale
 * @returns Formatted date string
 */
export const handleLastEarnedDate = (date?: string, userLocale?: string) => {
  if (!date) return 'Date not available';
  try {
    const formattedLocale = transformLocale(userLocale ?? 'en');
    return new Date(date).toLocaleDateString(formattedLocale);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};
