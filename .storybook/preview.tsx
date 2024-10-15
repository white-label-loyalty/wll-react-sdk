import type { Preview } from '@storybook/react';
import * as React from 'react';
import { SectionContext } from '../lib/components/organisms/Section';
import { WllSdkProvider } from '../lib/context/WllSdkContext';
import { Section } from '../lib/types/section';
import { defaultTheme } from '../lib/utils/styling';

const sdkConfig = {
  apiKey: 'test',
  baseUrl: 'http://localhost:3000',
};

interface MockSectionProviderProps {
  children: React.ReactNode;
  sectionData?: Section;
  loading?: boolean;
  error?: Error | null;
}

export const MockSectionProvider: React.FC<MockSectionProviderProps> = ({
  children,
  sectionData = {
    type: 'GRID',
    tiles: [
      {
        tileHeight: 'FULL',
        active: true,
        type: 'REWARD_CATEGORY',
        configuration: {
          rewardCategoryId: 'e946921f-cd35-4163-bfad-43057e097ac9',
          allowDecorationOverlay: true,
          rewardCategory: {
            name: 'Sports',
            priority: 0,
            type: 'REWARD',
            id: 'e946921f-cd35-4163-bfad-43057e097ac9',
            createdAt: '2024-08-20T08:46:43.803Z',
            updatedAt: '2024-08-20T08:46:43.803Z',
            description: null,
            metadata: null,
            pictureUrl: 'https://picsum.photos/200/300',
            rewards: [
              {
                id: 'e785dff1-5d66-41d6-95eb-9369279e8abf',
                createdAt: '2024-08-20T08:46:43.810Z',
                updatedAt: '2024-08-20T08:46:43.810Z',
                name: 'Intelligent Metal Pants',
                pictureUrl: 'https://picsum.photos/200/300',
                price: 19,
                priority: 0,
                availability: {
                  start: '2024-08-20T08:46:43.798Z',
                  end: '2025-01-31T13:56:28.366Z',
                },
                purchasable: true,
                tier: null,
                summary: null,
                redemptionMessage: null,
                visibilityCriteria: null,
              },
            ],
            parent: null,
          },
        },
        id: 'f12410a4-d280-4dfc-8204-ff9eef32aae1',
        createdAt: '2024-08-15T13:32:36.819Z',
        updatedAt: '2024-08-15T13:32:36.819Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'HALF',
        active: true,
        type: 'TIER',
        configuration: {
          type: 'SPECIFIC',
          tierId: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
          tier: {
            id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
            name: 'Gold',
            description: null,
            artworkUrl: null,
            pointsRequirement: 10,
            earnedPoints: 100,
            attained: false,
          },
        },
        id: 'ee15fee1-f3b7-46fb-b2fd-71db3a1c7ee1',
        createdAt: '2024-08-21T07:24:23.003Z',
        updatedAt: '2024-08-21T07:24:23.003Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'FULL',
        active: true,
        type: 'TIER',
        configuration: {
          type: 'NEXT',
          tier: {
            id: 'cab44129-ccb4-4d3c-94f1-57aff3183bf3',
            name: 'Emerald',
            description: null,
            artworkUrl: null,
            pointsRequirement: 10000,
            earnedPoints: 100,
            attained: false,
          },
        },
        id: 'ffd24e5f-1557-4100-b19a-837bfa8da460',
        createdAt: '2024-08-15T13:03:42.763Z',
        updatedAt: '2024-08-15T13:03:42.763Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'HALF',
        active: true,
        type: 'CONTENT',
        configuration: {
          title: 'Welcome Nick! ',
          artworkUrl: null,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        id: '863df8df-0182-428b-bb35-d5117050b860',
        createdAt: '2024-08-21T15:16:02.804Z',
        updatedAt: '2024-08-21T15:16:02.804Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'HALF',
        active: true,
        type: 'CONTENT',
        configuration: {
          title: 'Test Content Title',
          artworkUrl: 'https://picsum.photos/200/300',
          description: 'Test content description',
        },
        id: 'f563f4ac-6f79-4b59-b0e9-1b6ae25b1a94',
        createdAt: '2024-08-22T08:28:51.065Z',
        updatedAt: '2024-08-22T08:28:51.065Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'FULL',
        active: true,
        type: 'TIER',
        configuration: {
          type: 'CURRENT',
          tier: {
            id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
            name: 'Gold',
            description: null,
            artworkUrl: null,
            pointsRequirement: 10,
            earnedPoints: 100,
            attained: false,
          },
        },
        id: '02a7e6a6-7d47-4c52-8dbf-80f0f1a68a42',
        createdAt: '2024-08-15T13:03:27.127Z',
        updatedAt: '2024-08-15T13:03:27.127Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'FULL',
        active: true,
        type: 'REWARD_CATEGORY',
        configuration: {
          rewardCategoryId: 'b8cd84ee-ff9e-4244-b4d9-91436e6a6e80',
          allowDecorationOverlay: true,
          rewardCategory: {
            name: 'Sports',
            priority: 0,
            type: 'REWARD',
            id: 'e946921f-cd35-4163-bfad-43057e097ac9',
            createdAt: '2024-08-20T08:46:43.803Z',
            updatedAt: '2024-08-20T08:46:43.803Z',
            description: null,
            metadata: null,
            pictureUrl: 'https://picsum.photos/200/300',
            rewards: [
              {
                id: 'e785dff1-5d66-41d6-95eb-9369279e8abf',
                createdAt: '2024-08-20T08:46:43.810Z',
                updatedAt: '2024-08-20T08:46:43.810Z',
                name: 'Intelligent Metal Pants',
                pictureUrl: 'https://picsum.photos/200/300',
                price: 19,
                priority: 0,
                availability: {
                  start: '2024-08-20T08:46:43.798Z',
                  end: '2025-01-31T13:56:28.366Z',
                },
                purchasable: true,
                tier: null,
                summary: null,
                redemptionMessage: null,
                visibilityCriteria: null,
              },
            ],
            parent: null,
          },
        },
        id: '0d2c9333-b235-4194-9102-2560c4e0ea62',
        createdAt: '2024-08-15T13:06:36.022Z',
        updatedAt: '2024-08-15T13:27:12.434Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'FULL',
        active: true,
        type: 'REWARD_CATEGORY',
        configuration: {
          rewardCategoryId: 'a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d',
          allowDecorationOverlay: false,
          rewardCategory: {
            name: 'Sports',
            priority: 0,
            type: 'REWARD',
            id: 'e946921f-cd35-4163-bfad-43057e097ac9',
            createdAt: '2024-08-20T08:46:43.803Z',
            updatedAt: '2024-08-20T08:46:43.803Z',
            description: null,
            metadata: null,
            pictureUrl: 'https://picsum.photos/200/300',
            rewards: [
              {
                id: 'e785dff1-5d66-41d6-95eb-9369279e8abf',
                createdAt: '2024-08-20T08:46:43.810Z',
                updatedAt: '2024-08-20T08:46:43.810Z',
                name: 'Intelligent Metal Pants',
                pictureUrl: 'https://picsum.photos/200/300',
                price: 19,
                priority: 0,
                availability: {
                  start: '2024-08-20T08:46:43.798Z',
                  end: '2025-01-31T13:56:28.366Z',
                },
                purchasable: true,
                tier: null,
                summary: null,
                redemptionMessage: null,
                visibilityCriteria: null,
              },
            ],
            parent: null,
          },
        },
        id: 'a5889c18-8adb-43f3-a093-12a8a14930b3',
        createdAt: '2024-08-15T13:06:14.583Z',
        updatedAt: '2024-08-15T13:06:14.583Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'FULL',
        active: true,
        type: 'BADGE',
        configuration: {
          badgeId: 'a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d',
          badge: {
            id: 'a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d',
            name: 'Top Shopper',
            description:
              'You’ve earned the Top Shopper badge 2 times! Last awarded on 1 Jan 2024.',
            artworkUrl: 'https://picsum.photos/200/300',
            createdAt: '2024-08-15T13:06:14.583Z',
            updatedAt: '2024-08-15T13:06:14.583Z',
          },
        },
        id: 'a5889c18-8adb-43f3-a093-12a8a14930b3',
        createdAt: '2024-08-15T13:06:14.583Z',
        updatedAt: '2024-08-15T13:06:14.583Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'HALF',
        active: true,
        type: 'TIER',
        configuration: {
          type: 'CURRENT',
          tier: {
            id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
            name: 'Gold',
            description: null,
            artworkUrl: null,
            pointsRequirement: 10,
            earnedPoints: 100,
            attained: false,
          },
        },
        id: '030c9640-5fd3-438e-a52a-56fa36e63f25',
        createdAt: '2024-08-21T07:41:24.883Z',
        updatedAt: '2024-08-21T07:41:24.883Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'HALF',
        active: true,
        type: 'TIER',
        configuration: {
          type: 'NEXT',
          tier: {
            id: 'cab44129-ccb4-4d3c-94f1-57aff3183bf3',
            name: 'Emerald',
            description: null,
            artworkUrl: null,
            pointsRequirement: 10000,
            earnedPoints: 100,
            attained: false,
          },
        },
        id: '34d2a663-7495-4da5-8d8e-9772f79d3c49',
        createdAt: '2024-08-21T10:18:02.305Z',
        updatedAt: '2024-08-21T10:18:02.305Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'HALF',
        active: true,
        type: 'POINTS',
        configuration: {
          title: 'Points',
          artworkUrl: 'https://picsum.photos/200/200',
          multiplier: null,
          points: 100,
          prefix: null,
          suffix: null,
        },
        id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
        createdAt: '2024-08-20T12:59:33.670Z',
        updatedAt: '2024-08-20T12:59:33.670Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'FULL',
        active: true,
        type: 'TIER',
        configuration: {
          type: 'SPECIFIC',
          tierId: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
          tier: {
            id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
            name: 'Gold',
            description: null,
            artworkUrl: null,
            pointsRequirement: 10,
            earnedPoints: 100,
            attained: false,
          },
        },
        id: '42d99d45-ab97-47bd-a7da-fdbaec4054d9',
        createdAt: '2024-08-15T13:04:01.941Z',
        updatedAt: '2024-08-15T13:04:01.941Z',
        visibilityCriteria: null,
      },
      {
        tileHeight: 'HALF',
        active: true,
        type: 'REWARD',
        configuration: {
          rewardId: '02fdea07-e3eb-4a2d-a66a-cb0368427bd2',
          showPrice: false,
          reward: {
            id: '02fdea07-e3eb-4a2d-a66a-cb0368427bd2',
            createdAt: '2024-08-20T08:46:43.851Z',
            updatedAt: '2024-08-20T08:46:43.851Z',
            name: 'Incredible Granite Soap',
            description: 'Ut quidem nostrum atque.',
            pictureUrl: 'https://picsum.photos/200/300',
            value: 0,
            price: 61,
            priority: 0,
            availability: {
              start: '2024-08-20T08:46:43.848Z',
              end: '2024-09-14T03:04:54.056Z',
            },
            purchasable: true,
            terms: '',
            tier: null,
            venues: [],
            category: null,
            discounts: [],
            summary: null,
            redemptionChannels: ['IN_STORE', 'ONLINE'],
            purchasableForAudiences: [],
            logoUrl: null,
            redemptionMessage: null,
            visibilityCriteria: null,
            type: 'VOUCHER',
            codeType: 'HUMAN',
            code: null,
            purchaseExpiration: null,
            hideCode: false,
            notificationConfig: null,
          },
        },
        id: '511b2a95-5094-4a01-b958-05643f813822',
        createdAt: '2024-08-20T13:05:16.974Z',
        updatedAt: '2024-08-20T13:05:16.974Z',
        visibilityCriteria: null,
      },
    ],
    priority: 1,
    active: true,
    pointsMultiplier: 100,
    id: '47c72773-11c6-41b0-988d-fcc74f58181f',
    createdAt: '2024-08-15T13:38:20.852Z',
    updatedAt: '2024-08-15T13:38:20.852Z',
    title: 'Example Section',
    description: 'This is an example description',
    pointsPrefix: null,
    pointsSuffix: 'pts',
  },
  loading = false,
  error = null,
}) => {
  return (
    <SectionContext.Provider
      value={{
        sectionData: sectionData as Section,
        loading,
        error,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

const darkTheme = {
  ...defaultTheme,
  background: '#1a1a1a',
  text: '#ffffff',
  surface: '#2c2c2c',
  surfaceText: '#ffffff',
  primary: '#FFD23C',
};

const clientATheme = {
  ...defaultTheme,
  primary: '#e63946',
  accent: '#a8dadc',
  surface: '#fff',
};

const clientBTheme = {
  ...defaultTheme,
  primary: '#2E8840',
  accent: '#2E8840',
  background: '#ECE3D7',
  surface: '#fff',
};

const themes = {
  default: defaultTheme,
  dark: darkTheme,
  clientA: clientATheme,
  clientB: clientBTheme,
};
const styleTag = `
  <style>
    #storybook-root {
      padding: 0 !important;
    }
    .sb-show-main {
      margin: 0 !important;
    }
  </style>
`;
const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme;
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
            </MockSectionProvider>
          </div>
        </WllSdkProvider>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true }, // Disable the backgrounds addon
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
          { value: 'clientA', title: 'Red' },
          { value: 'clientB', title: 'Green' },
        ],
      },
    },
  },
};

export default preview;
