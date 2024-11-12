import { useCallback } from 'react';
import { SDKConfig } from '../context/WllSdkContext';

const baseUrl = 'https://api.staging.core.wlloyalty.net/v1';

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
        headers.set('x-api-key', '7Qzzp3ZwU47JLobfP4uSC9Dpc1el0mob1ysrlhYn');
        headers.set(
          'Authorization',
          `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VRTNSa1ZFUVRaRVFrRXdSalF3T0RGQk5EbERNakU1UWpOQ04wUkVRa0ZETVVFMU5rSTNRdyJ9.eyJpc3MiOiJodHRwczovL3dsbC1kZW1vLXByb3RvdHlwZS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjM1NjVjYzYwZTk4Y2M4MDliYTA3ZWYzIiwiYXVkIjoid2xsb3lhbHR5Lm5ldCIsImlhdCI6MTczMTM0NDAzMCwiZXhwIjoxNzMxNDMwNDMwLCJndHkiOiJwYXNzd29yZCIsImF6cCI6InNZdVpVRTRMaWJrODRNb3dhMGdHZTJhaU5TZlRxZFFpIn0.KX4VMoSQ6kHWFI53xDHrmn_ExQ1nVx0SWetX0va2b9uDfbZgZ-c2uR-O2_DxBNE6MXLXSaFKQ9VYaxK02hfBq8AEEKMjSh6_hZx2FDeEQ0SFSyheISITFs0TZMHCYOl2Kc3Ns8DUQIq8uT3lByGCxOgvS6b2svE5O-j92RgwbmPqkLgO84MRQC7f0QKpigkVwNNNGd0LcOcezhpjHD9hW2HNSw5zbjbNbGUQhrXNubNVSksK9ol3UVGUihA_jnKkRiltONbZAKnQbymIskZH0gw62e0KkfedTYqAzj7fXIwKJ7RQlhFgBW5RjTIKFmqcazIHN_o6xjOwv4dfEdx1EA`
        );

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
        console.log('response', response);
        const json = await response.json();
        console.log('json', json);
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
        params.append('locale', 'en');

        const queryString = params.toString();
        return makeRequest(
          `${baseUrl}/tiles-management/${resource}/${id}${queryString ? `?${queryString}` : ''}`
        );
      },
      [makeRequest]
    );
  };
};

export const useGetGroupByID = createResourceGetter('groups', true);
export const useGetSectionByID = createResourceGetter('sections');
export const useGetTileByID = createResourceGetter('tiles');
