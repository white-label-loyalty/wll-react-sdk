import { useEffect, useState } from 'react';
import { useWllSdk } from '../context/WllSdkContext';
import type { TGroup } from '../types/group';

type UseInitialGroupFetchProps = {
  id: string;
  setGroupData: (group: TGroup) => void;
};

export const useInitialGroupFetch = ({
  id,
  setGroupData,
}: UseInitialGroupFetchProps): { isLoading: boolean; error: string | null } => {
  const sdk = useWllSdk();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchGroup = async (): Promise<void> => {
      if (!id || !sdk?.refreshGroup) {
        setError('Unable to fetch group data: invalid configuration');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await sdk.refreshGroup(id);
        if (cancelled) return;

        if (response?.status === 'success' && response.data) {
          setGroupData(response.data);
        } else {
          setError(response?.error ?? 'Failed to fetch group data');
        }
      } catch {
        if (!cancelled) setError('An unexpected error occurred.');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchGroup();

    return () => {
      cancelled = true;
    };
  }, [id, sdk, setGroupData]);

  return { isLoading, error };
};
