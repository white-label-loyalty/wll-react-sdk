import { useWllSdk } from '../context/WllSdkContext';

/**
 * Hook to invalidate SDK data
 * @returns Methods to trigger SDK data updates
 */
export function useInvalidateData() {
  const sdk = useWllSdk();

  return {
    invalidateGroupData: () => {
      if (sdk) {
        sdk.notifyDataChange('GROUP_DATA_CHANGED');
      }
    },
    invalidateSectionData: (sectionId?: string) => {
      if (sdk) {
        sdk.notifyDataChange('SECTION_DATA_CHANGED', { sectionId });
      }
    },
    invalidateTileData: (tileId?: string) => {
      if (sdk) {
        sdk.notifyDataChange('TILE_DATA_CHANGED', { tileId });
      }
    },
  };
}
