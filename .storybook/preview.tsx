import type { Preview } from '@storybook/react';
import * as React from 'react';
import { SectionContext } from '../lib/components/organisms/Section';
import { WllSdkProvider } from '../lib/context/WllSdkContext';
import { SectionType, TSection } from '../lib/types/section';
import {
  ProgressType,
  TierTileType,
  TileHeight,
  TileType,
} from '../lib/types/tile';
import { defaultTheme } from '../lib/utils/styling';

const sdkConfig = {
  apiKey: 'test',
  baseUrl: 'http://localhost:3000',
};

type MockSectionProviderProps = {
  children: React.ReactNode;
  sectionData?: TSection;
  loading?: boolean;
  error?: Error | undefined;
};

export const MockSectionProvider: React.FC<MockSectionProviderProps> = ({
  children,
  sectionData = {
    name: 'Section2',
    type: SectionType.Grid,
    active: true,
    pointsMultiplier: 1,
    pointsPrefix: undefined,
    pointsSuffix: undefined,
    id: '84739810-37f5-4621-8433-8e0b61e09a5e',
    createdAt: '2024-10-15T13:36:00.204Z',
    updatedAt: '2024-10-15T13:36:00.204Z',
    title: undefined,
    description: undefined,
    priority: 2,
    tiles: [
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Tier,
        priority: 0,
        configuration: {
          type: TierTileType.currentTier,
          tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
          progressType: ProgressType.Name,
          tier: {
            priority: 0,
            id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
            name: 'Bronze',
            description: undefined,
            artworkUrl: undefined,
            pointsRequirement: 100,
          },
          pointsMultiplier: 1,
          pointsPrefix: undefined,
          pointsSuffix: undefined,
        },
        id: '89255d20-737a-4aa9-af12-9266b4b1dedf',
        createdAt: '2024-10-15T13:24:28.991Z',
        updatedAt: '2024-10-15T13:24:28.991Z',
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Tier,
        priority: 0,
        configuration: {
          type: TierTileType.currentTargetSpecific,
          tierId: '95a6405a-36d9-471e-9ccb-75088c6f2ba6',
          progressType: ProgressType.Points,
          tier: {
            priority: 0,
            id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
            name: 'Bronze',
            description: undefined,
            artworkUrl: undefined,
            pointsRequirement: 100,
          },
          targetTier: {
            id: '95a6405a-36d9-471e-9ccb-75088c6f2ba6',
            name: 'Silver',
            pointsRequirement: 2000,
            attained: false,
            artworkUrl: undefined,
            earnedPoints: 300,
            priority: 1,
          },
          pointsMultiplier: 1,
          pointsPrefix: undefined,
          pointsSuffix: undefined,
        },
        id: '11ac9b70-f025-4184-8372-7acbf0ac08cd',
        createdAt: '2024-10-15T13:21:40.133Z',
        updatedAt: '2024-10-15T13:21:40.133Z',
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Content,
        configuration: {
          title: 'Welcome Graeme',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        id: '95d0cf59-198b-48b2-9f42-931cd28bee6e',
        createdAt: '2024-10-15T11:38:59.522Z',
        updatedAt: '2024-10-15T11:38:59.522Z',
        priority: 0,
      },
    ],
  },
}) => {
  return (
    <SectionContext.Provider value={{ sectionData }}>
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
