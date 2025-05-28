import { useEffect, useRef, useState } from 'react';
import { useWllSdk } from '../context/WllSdkContext';
import { TGroup } from '../types/group';

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

  const fetchInProgressRef = useRef(false);

  useEffect(() => {
    let isMounted = true;

    const fetch = async () => {
      if (fetchInProgressRef.current) {
        return;
      }

      fetchInProgressRef.current = true;
      if (!id || !sdk || !sdk.refreshGroup) {
        setError('Unable to fetch group data: invalid configuration');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await sdk.refreshGroup(id);
        if (!isMounted) return;

        if (response?.status === 'success' && response.data) {
          setGroupData(response.data);
        } else {
          setError(response?.error ?? 'Failed to fetch group data');
        }
      } catch (err) {
        if (isMounted) {
          setError('An unexpected error occurred.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetch();

    return () => {
      isMounted = false;
    };
  }, [id, sdk, setGroupData]);

  return { isLoading, error };
};
