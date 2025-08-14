import { renderHook } from '@testing-library/react';
import { CoreApiUrl, SDKConfig } from '../context/WllSdkContext';
import { useCreateRequestOptions, useMakeRequest } from '../utils/apiHelpers';

const mockConfig: SDKConfig = {
  apiKey: 'test-api-key',
  userToken: 'test-user-token',
  locale: 'en',
  coreApiUrl: CoreApiUrl.STAGING_EU,
};

describe('useCreateRequestOptions', () => {
  it('adds correct headers when no custom fetcher is provided', () => {
    const { result } = renderHook(() => useCreateRequestOptions(mockConfig));
    const options = result.current();

    expect(options).toHaveProperty('headers');
    const headers = options?.headers as Headers;
    expect(headers.get('x-api-key')).toBe('test-api-key');
    expect(headers.get('Authorization')).toBe('Bearer test-user-token');
  });

  it('merges provided options with default headers', () => {
    const { result } = renderHook(() => useCreateRequestOptions(mockConfig));
    const customHeaders = new Headers({
      'Content-Type': 'application/json',
    });
    const options = result.current({ headers: customHeaders });

    const headers = options?.headers as Headers;
    expect(headers.get('Content-Type')).toBe('application/json');
    expect(headers.get('x-api-key')).toBe('test-api-key');
    expect(headers.get('Authorization')).toBe('Bearer test-user-token');
  });

  it('returns undefined when custom fetcher is provided', () => {
    const configWithFetcher = {
      ...mockConfig,
      fetcher: jest.fn(),
    };
    const { result } = renderHook(() =>
      useCreateRequestOptions(configWithFetcher)
    );
    const options = result.current();

    expect(options).toBeUndefined();
  });
});

describe('useMakeRequest', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    console.log = jest.fn();
  });

  it('handles successful API response', async () => {
    const mockResponse = {
      status: 'success',
      data: { id: 1 },
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    const { result } = renderHook(() => useMakeRequest(mockConfig));
    const response = await result.current('/test');

    expect(response).toEqual(mockResponse);
  });

  it('handles API failure response', async () => {
    const mockResponse = {
      status: 'fail',
      message: 'Invalid request',
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    const { result } = renderHook(() => useMakeRequest(mockConfig));
    const response = await result.current('/test');

    expect(response).toEqual({
      status: 'fail',
      data: null,
      error: 'Invalid request',
    });
  });

  it('handles network errors', async () => {
    const error = new Error('Network error');
    (global.fetch as jest.Mock).mockRejectedValueOnce(error);

    const { result } = renderHook(() => useMakeRequest(mockConfig));
    const response = await result.current('/test');

    expect(response).toEqual({
      status: 'error',
      data: null,
      error: 'Network error',
    });
  });

  it('uses custom fetcher when provided', async () => {
    const mockFetcher = jest.fn().mockResolvedValue({
      status: 'success',
      data: { id: 1 },
    });
    const configWithFetcher = {
      ...mockConfig,
      fetcher: mockFetcher,
    };

    const { result } = renderHook(() => useMakeRequest(configWithFetcher));
    await result.current('/test');

    expect(mockFetcher).toHaveBeenCalled();
  });
});
