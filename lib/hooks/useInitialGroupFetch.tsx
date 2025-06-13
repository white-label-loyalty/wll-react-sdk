import { useEffect, useState } from 'react';
import { APIResponse, useWllSdk } from '../context/WllSdkContext';
import type { TGroup } from '../types/group';

const inFlightRequests = new Map<string, Promise<APIResponse<TGroup>>>();

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
    if (!id || !sdk?.refreshGroup) {
      setError('Unable to fetch group data: invalid configuration');
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const fetch = async (): Promise<void> => {
      setIsLoading(true);
      setError(null);

      const existing = inFlightRequests.get(id);
      const request = existing ?? sdk.refreshGroup(id);
      if (!existing) {
        inFlightRequests.set(id, request);
        request.finally(() => {
          if (inFlightRequests.get(id) === request) {
            inFlightRequests.delete(id);
          }
        });
      }

      try {
        const res = await request;
        if (cancelled) return;
        if (res?.status === 'success' && res.data) {
          setGroupData(res.data);
        } else {
          setError(res?.error ?? 'Failed to fetch group data');
        }
      } catch {
        if (!cancelled) setError('An unexpected error occurred.');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetch();
    return () => {
      cancelled = true;
    };
  }, [id, sdk, setGroupData]);

  return { isLoading, error };
};
