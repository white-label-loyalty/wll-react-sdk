import { useCallback } from 'react';
import { SDKConfig } from '../context/WllSdkContext';

type Environment =
  | 'PRODUCTION'
  | 'STAGING'
  | 'DEVELOPMENT'
  | 'STAGING-US'
  | 'PRODUCTION-US';

const getBaseUrl = (environment: Environment = 'STAGING'): string => {
  switch (environment) {
    case 'PRODUCTION':
      return 'https://api.core.wlloyalty.net/v1';
    case 'PRODUCTION-US':
      return 'https://api.core.us.wlloyalty.net/v1';
    case 'STAGING-US':
      return 'https://api.staging.core.us.wlloyalty.net/v1';
    case 'DEVELOPMENT':
      return 'https://localhost:8080/v1';
    case 'STAGING':
    default:
      return 'https://api.staging.core.wlloyalty.net/v1';
  }
};

type APIResponse<T> = {
  status: 'success' | 'fail' | 'error';
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
          return await config.fetcher(url, createRequestOptions());
        }

        const response = await fetch(url, createRequestOptions());
        const json = await response.json();
        if (json.status === 'fail') {
          return {
            status: 'fail',
            data: null,
            error: json.message || 'API returned non-success status',
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
        const params = new URLSearchParams();

        if (includeHydrate) {
          params.append('hydrate', 'true');
        }

        // Always append locale=en
        params.append('locale', config.locale || 'en');

        const env = config.environment || 'STAGING';
        const baseUrl = getBaseUrl(env as Environment);

        const queryString = params.toString();

        return makeRequest(
          `${baseUrl}/tiles-management/${resource}/${id}${queryString ? `?${queryString}` : ''}`
        );
      },
      [makeRequest, config.environment]
    );
  };
};

export const useGetGroupByID = createResourceGetter('groups', true);
export const useGetSectionByID = createResourceGetter('sections');
export const useGetTileByID = createResourceGetter('tiles');
