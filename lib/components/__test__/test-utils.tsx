import { render } from '@testing-library/react';
import React from 'react';
import { CoreApiUrl, WllSdkProvider } from '../../context/WllSdkContext';
import { defaultTheme } from '../../utils/styling';

const defaultConfig = {
  apiKey: 'test-api-key',
  userToken: 'test-user-token',
  coreApiUrl: CoreApiUrl.STAGING_EU,
};

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <WllSdkProvider
      config={defaultConfig}
      theme={defaultTheme}
      navigationConfig={{}}
    >
      {children}
    </WllSdkProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
