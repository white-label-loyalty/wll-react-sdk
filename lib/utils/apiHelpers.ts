import { useCallback } from 'react';
import { SDKConfig } from '../context/WllSdkContext';

const baseUrl = 'https://api.staging.core.wlloyalty.net/v1';

type APIResponse<T> = {
  status: 'success' | 'error';
  data: T | null;
  error?: string;
};

export const useCreateRequestOptions = (config: SDKConfig) => {
  return useCallback(
    (options: RequestInit = {}) => {
      // Only create headers if we're not using a custom fetcher
      if (!config.fetcher) {
        const headers = new Headers(options.headers);
        headers.set('x-api-key', config.apiKey);
        headers.set('Authorization', `Bearer ${config.userToken}`);

        return {
          ...options,
          headers,
        };
      }
    },
    [config.apiKey, config.userToken, config.fetcher]
  );
};

export const useMakeRequest = (config: SDKConfig) => {
  const createRequestOptions = useCreateRequestOptions(config);

  return useCallback(
    async <T>(url: string): Promise<APIResponse<T>> => {
      try {
        if (config.fetcher) {
          // Use custom fetcher if provided
          return await config.fetcher(url, createRequestOptions());
        }

        // Default fetch behavior
        const response = await fetch(url, createRequestOptions());
        const json = await response.json();

        if (json.status !== 'success') {
          return {
            status: 'error',
            data: null,
            error: json.error || 'API returned non-success status',
          };
        }

        return json;
      } catch (error) {
        return {
          status: 'error',
          data: null,
          error:
            error instanceof Error
              ? error.message
              : 'An unknown error occurred',
        };
      }
    },
    [createRequestOptions, config.fetcher]
  );
};

export const createResourceGetter = (
  resource: string,
  includeHydrate = false
) => {
  return (config: SDKConfig) => {
    const makeRequest = useMakeRequest(config);

    return useCallback(
      (id: string) => {
        const queryParams = includeHydrate ? '?hydrate=true' : '';
        return makeRequest(
          `${baseUrl}/tiles-management/${resource}/${id}${queryParams}`
        );
      },
      [makeRequest]
    );
  };
};

export const useGetGroupByID = createResourceGetter('groups', true);
export const useGetSectionByID = createResourceGetter('sections');
export const useGetTileByID = createResourceGetter('tiles');
