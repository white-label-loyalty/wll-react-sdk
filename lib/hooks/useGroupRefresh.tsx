import { useEffect } from 'react';
import { useWllSdk } from '../context/WllSdkContext';
import { TGroup } from '../types/group';

type UseGroupRefreshProps = {
  id: string;
  enabled?: boolean;
  setGroupData: (g: TGroup) => void;
};

export const useGroupRefresh = ({
  id,
  enabled = false,
  setGroupData,
}: UseGroupRefreshProps) => {
  const sdk = useWllSdk();

  useEffect(() => {
    if (!enabled || !sdk?.subscribeToDataChange) {
      return;
    }

    const unsubscribe = sdk.subscribeToDataChange(
      'GROUP_DATA_CHANGED',
      async () => {
        if (!id || !sdk || !sdk.refreshGroup) {
          return;
        }

        try {
          const res = await sdk.refreshGroup(id);

          if (res?.status === 'success' && res.data) {
            setGroupData(res.data as TGroup);
          }
        } catch (err) {
          console.error('Error during silent refresh:', err);
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [id, sdk, enabled, setGroupData]);
};
