import type { Preview } from '@storybook/react';
import * as React from 'react';
import { Indicator } from '../lib/components/atoms';
import { SectionContext } from '../lib/components/organisms/Section';
import { WllSdkProvider } from '../lib/context/WllSdkContext';
import { SectionType, TSection } from '../lib/types/section';

import {
  CTALinkTarget,
  ProgressType,
  TierTileType,
  TileHeight,
  TileType,
} from '../lib/types/tile';
import { defaultTheme } from '../lib/utils/styling';
import { ThemeName, themes } from '../lib/utils/themeHelpers';

const sdkConfig = {
  apiKey: 'test',
  baseUrl: 'http://localhost:3000',
};

type MockSectionProviderProps = {
  children: React.ReactNode;
  sectionData?: TSection;
  loading?: boolean;
  error?: Error | null;
};

export const MockSectionProvider: React.FC<MockSectionProviderProps> = ({
  children,
  sectionData = {
    details: [],
    defaultLocale: 'en',
    name: 'Misc Tiles',
    type: SectionType.Grid,
    active: true,
    id: 'cc1bf03b-42fd-4276-b543-84ec7a1cc527',
    createdAt: '2024-11-14T19:00:31.894Z',
    updatedAt: '2024-11-15T09:48:37.232Z',
    priority: 5,
    tiles: [
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Content,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.newWindow,
          locale: 'en',
          title: 'Welcome Graeme',
          body: 'Your culinary adventure awaits, tuck in and start earning!',
          ctaLink: 'https://www.google.com',
        },
        id: 'fb42e341-c477-4b84-a8cf-02aa1f76a351',
        createdAt: '2024-11-14T17:58:13.107Z',
        updatedAt: '2024-11-21T21:44:41.237Z',
        priority: 8,
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Tier,
        configuration: {
          type: TierTileType.currentTier,
          tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
          progressType: ProgressType.Name,
          tier: {
            id: '5607df63-8e18-4a5c-ab71-06330368c1b3',
            name: 'Platinum',
            description: null,
            artworkUrl: null,
            pointsRequirement: 10000,
            priority: 0,
          },
          locale: 'en',
          title: 'Your Tier',
          pointsSuffix: 'points',
          emptyArtworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          emptyDescription: 'Oops. You’re not in a tier.',
          pointsToTierPrefix: 'Earn',
          pointsToTierSuffix: 'to achieve this tier.',
        },
        id: 'bcd700c0-1288-4117-9ff0-fe2a72913e77',
        createdAt: '2024-11-14T18:06:25.686Z',
        updatedAt: '2024-11-14T18:06:25.686Z',
        priority: 7,
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: 'POINTS',
        configuration: {
          defaultLocale: 'en',
          details: [],
          points: 5600,
          locale: 'en',
          title: 'Points balance',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          pointsPrefix: '',
          pointsSuffix: 'pts',
          pointsMultiplier: 1,
        },
        id: '7530fc60-6352-47bc-86a1-8d54e9848fcc',
        createdAt: '2024-11-14T18:07:37.939Z',
        updatedAt: '2024-11-14T18:07:37.939Z',
        priority: 6,
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Content,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.newWindow,
          locale: 'en',
          title: '',
          body: 'Every bite brings you closer to rewards! Earn 1 point for every $1 spent!',
          artworkUrl: null,
          ctaLink: 'https://google.co.uk',
        },
        id: '288c9873-729e-4766-83fc-1e15cafde6ba',
        createdAt: '2024-11-14T18:44:18.897Z',
        updatedAt: '2024-11-14T18:44:18.897Z',
        priority: 5,
      },
    ],
    title: 'Profile',
    locale: 'en',
    description:
      'Welcome to WLL Explorer! Find out more about our exciting loyalty program.',
  },
}) => {
  return (
    // @ts-ignore
    <SectionContext.Provider value={{ sectionData }}>
      {children}
    </SectionContext.Provider>
  );
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme as ThemeName;
      const theme = themes[selectedTheme] || defaultTheme;

      return (
        <WllSdkProvider theme={theme} config={sdkConfig}>
          <div
            style={{
              backgroundColor: theme.background,
              minHeight: '100vh',
              padding: '1rem',
            }}
          >
            <MockSectionProvider>
              <Story />

              <Indicator />
            </MockSectionProvider>
          </div>
        </WllSdkProvider>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'dark', title: 'Dark' },
          { value: 'modern', title: 'Modern' },
          { value: 'warm', title: 'Warm' },
          { value: 'forest', title: 'Forest' },
          { value: 'sunset', title: 'Sunset' },
        ],
      },
    },
  },
};

export default preview;
