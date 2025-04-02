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
