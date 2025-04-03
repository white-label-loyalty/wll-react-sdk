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
 * @param locale Two-letter locale code to transform (en, fr, etc.)
 * @returns Full locale string (e.g., en-GB, fr-FR)
 */
export const transformLocale = (locale?: string | null): string => {
  const localeMapping: Record<string, string> = {
    en: 'en-GB',
    fr: 'fr-FR',
    es: 'es-ES',
    de: 'de-DE',
    it: 'it-IT',
    pt: 'pt-PT',
    us: 'en-US',
  };

  const languageCode = (locale ?? 'en').toLowerCase();
  return localeMapping[languageCode] || 'en-GB';
};

/**
 * Formats a date string to a localized date string based on user locale
 * @param date Date string to format
 * @param userLocale User's locale (defaults to 'en')
 * @returns Formatted date string or fallback message
 */
export const handleLastEarnedDate = (
  date?: string,
  userLocale: string = 'en'
): string => {
  if (!date) return 'Date not available';

  try {
    const formattedLocale = transformLocale(userLocale);
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date';
    }

    return dateObj.toLocaleDateString(formattedLocale);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};
