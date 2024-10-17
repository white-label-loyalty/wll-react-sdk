import React from 'react';
import { TGroup } from '../types/group';
import { TSection } from '../types/section';
import { BaseThemeObject, ThemeContextType, ThemeObject } from '../types/theme';
import { Tile } from '../types/tile';
import { defaultTheme, sizes } from '../utils/styling';
import {
  getAlphaDerivedColors,
  getDerivedColor,
  getDerivedColorPercentages,
  getReadableTextColor,
} from '../utils/themeHelpers';

type SDKConfig = {
  apiKey: string;
  baseUrl: string;
  proxyEndpoint?: string;
};

type APIResponse<T> = {
  data: T;
  status: string;
};

type WllSdkContextType = ThemeContextType & {
  getGroupByID: (id: string) => Promise<APIResponse<TGroup>>;
  getSectionByID: (id: string) => Promise<APIResponse<TSection>>;
  getTileByID: (id: string) => Promise<APIResponse<Tile>>;
};

type WllSdkProviderProps = {
  children: React.ReactNode;
  theme?: Partial<BaseThemeObject>;
  config: SDKConfig;
};

const createTheme = (baseTheme: Partial<BaseThemeObject> = {}): ThemeObject => {
  const mergedTheme = {
    ...defaultTheme,
    ...baseTheme,
  } as BaseThemeObject;
  const {
    background,
    primary,
    accent,
    positive,
    negative,
    surfaceText,
    surface,
  } = mergedTheme;
  return {
    ...mergedTheme,
    sizes,
    derivedBackground: getDerivedColor(background),
    primaryText: getReadableTextColor(primary),
    accentText: getReadableTextColor(accent),
    positiveText: getReadableTextColor(positive),
    negativeText: getReadableTextColor(negative),
    derivedSurface: getDerivedColorPercentages(surface),
    derivedSurfaceText: getDerivedColorPercentages(surfaceText),
    alphaDerivedPrimary: getAlphaDerivedColors(primary),
  };
};

const WllSdkContext = React.createContext<WllSdkContextType | undefined>(
  undefined
);

export const WllSdkProvider: React.FC<WllSdkProviderProps> = ({
  children,
  theme: providedTheme,
  config,
}) => {
  const [theme, setThemeState] = React.useState(() =>
    createTheme(providedTheme || {})
  );

  const setTheme = React.useCallback((newTheme: Partial<BaseThemeObject>) => {
    setThemeState((prevTheme) => createTheme({ ...prevTheme, ...newTheme }));
  }, []);

  // Mocked API calls
  const makeRequest = async (
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Tile | TSection> => {
    const { proxyEndpoint, baseUrl, apiKey } = config;
    const url = `${proxyEndpoint || baseUrl}${endpoint}`;
    const headers = new Headers(options.headers);
    if (apiKey) headers.set('X-Api-Key', apiKey);

    const response = await fetch(url, { ...options, headers });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  };

  const getGroupByID = async (id: string): Promise<any> => {
    // Mocked response for getGroupByID
    return {
      status: 'success',
      data: {
        name: 'Group2',
        active: true,
        id: '00a2cb62-911f-49fd-8f1c-a61ddc0fbdce',
        createdAt: '2024-10-15T14:21:06.135Z',
        updatedAt: '2024-10-16T10:00:09.823Z',
        sections: [
          {
            name: 'Banner Tiles',
            type: 'BANNER',
            active: true,
            pointsMultiplier: '1',
            pointsPrefix: null,
            pointsSuffix: null,
            id: '3a70a8dc-54a9-47b4-893b-ab1b882fc2d6',
            createdAt: '2024-10-17T11:40:50.073Z',
            updatedAt: '2024-10-17T11:40:50.073Z',
            title: 'Banner Rewards',
            description:
              'Welcome to WLL Explorer! Find out more about our exciting loyalty program.',
            visibilityCriteria: null,
            priority: 3,
            tiles: [
              {
                tileHeight: 'FULL',
                active: true,
                type: 'BANNER',
                configuration: {
                  title: 'New iPhone 15 Pro',
                  ctaLink: '/products/iphone15pro',
                  ctaText: 'Shop Now',
                  artworkUrl:
                    'https://www.istore.co.uk/wp-content/uploads/2023/09/iPhone_15_Pro_Blue_Titanium_PDP_Image_Position-5__GBEN-1.jpg',
                  description:
                    'Experience the power of our most advanced iPhone yet. Available now with exclusive launch offers.',
                  ctaLinkTarget: 'SAME_FRAME',
                },
                id: '8854230a-222a-42a2-b34a-d6db9f9218bf',
                createdAt: '2024-10-17T11:33:09.167Z',
                updatedAt: '2024-10-17T11:33:09.167Z',
                priority: 3,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'BANNER',
                configuration: {
                  title: 'Unlock Your Rewards',
                  ctaLink: '#member-card',
                  ctaText: 'View Rewards',
                  artworkUrl:
                    'https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg',
                  description:
                    'You have 5000 points waiting! Redeem now for exclusive discounts and perks.',
                  ctaLinkTarget: 'SAME_FRAME',
                },
                id: '076015e9-74cb-4c2a-8f50-9e661abb9c66',
                createdAt: '2024-10-17T11:36:48.595Z',
                updatedAt: '2024-10-17T11:36:48.595Z',
                priority: 2,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'BANNER',
                configuration: {
                  title: 'TechCon 2024',
                  ctaLink: 'https://techcon2024.com/register',
                  ctaText: 'Register Now',
                  artworkUrl:
                    'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg',
                  description:
                    'Join the biggest tech conference of the year. Keynotes, workshops, and networking opportunities await!',
                  ctaLinkTarget: 'NEW_TAB',
                },
                id: 'dfbb2ac3-533f-4bc8-a9bf-c143249ab5d3',
                createdAt: '2024-10-17T11:36:54.141Z',
                updatedAt: '2024-10-17T11:36:54.141Z',
                priority: 1,
              },
            ],
          },
          {
            name: 'Reward Tiles',
            type: 'GRID',
            active: true,
            pointsMultiplier: '1',
            pointsPrefix: null,
            pointsSuffix: null,
            id: '4bb9b48b-6ac3-43db-a0fd-240fef27c788',
            createdAt: '2024-10-17T10:52:52.032Z',
            updatedAt: '2024-10-17T10:52:52.032Z',
            title: 'General Rewards',
            description:
              'Welcome to WLL Explorer! Find out more about our exciting loyalty program.',
            visibilityCriteria: null,
            priority: 2,
            tiles: [
              {
                tileHeight: 'FULL',
                active: true,
                type: 'REWARD',
                configuration: {
                  rewardId: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
                  showPrice: false,
                  showArtwork: true,
                  showDetails: false,
                  id: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
                  createdAt: '2023-05-05T15:11:42.342Z',
                  updatedAt: '2024-07-17T10:45:04.350Z',
                  name: 'Sweet Chilli Lobster Noodles',
                  pictureUrl:
                    'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
                  value: 800,
                  price: 10,
                  priority: 10,
                  availability: {
                    start: '2023-05-05T15:10:31.274Z',
                    end: null,
                  },
                  purchasable: true,
                  tier: null,
                  category: {
                    name: 'Chicken Salad',
                    priority: 0,
                    type: 'REWARD',
                    id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
                    createdAt: '2023-05-05T10:39:57.595Z',
                    updatedAt: '2023-05-05T10:39:57.595Z',
                    description: null,
                    metadata: null,
                    pictureUrl:
                      'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
                  },
                  discounts: [],
                  summary: 'test',
                  redemptionMessage: null,
                  visibilityCriteria: null,
                  type: 'VOUCHER',
                  codeType: 'HUMAN',
                  code: null,
                  purchaseExpiration: null,
                  hideCode: false,
                  notificationConfig: null,
                  artworkUrl:
                    'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
                  pointsMultiplier: '1',
                  pointsPrefix: null,
                  pointsSuffix: null,
                },
                id: '39ac25f0-35b3-4668-acba-032dccc63e91',
                createdAt: '2024-10-17T10:50:12.673Z',
                updatedAt: '2024-10-17T10:50:12.673Z',
                priority: 3,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'REWARD',
                configuration: {
                  rewardId: 'a714a3d8-51bd-40b0-aa95-53ff20657ca1',
                  showPrice: false,
                  id: 'a714a3d8-51bd-40b0-aa95-53ff20657ca1',
                  createdAt: '2023-05-11T11:01:16.291Z',
                  updatedAt: '2024-07-17T10:48:01.601Z',
                  name: 'Big Juicy Lucie',
                  pictureUrl:
                    'https://ucarecdn.com/c0f0a144-50be-429d-8b4d-a59266f40057/',
                  value: 0,
                  price: 10,
                  priority: 0,
                  availability: {
                    start: '2023-05-11T11:00:22.074Z',
                    end: null,
                  },
                  purchasable: true,
                  tier: null,
                  category: {
                    name: 'Chicken Salad',
                    priority: 0,
                    type: 'REWARD',
                    id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
                    createdAt: '2023-05-05T10:39:57.595Z',
                    updatedAt: '2023-05-05T10:39:57.595Z',
                    description: null,
                    metadata: null,
                    pictureUrl:
                      'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
                  },
                  discounts: [],
                  summary: 'Test',
                  redemptionMessage: null,
                  visibilityCriteria: null,
                  type: 'VOUCHER',
                  codeType: 'HUMAN',
                  code: null,
                  purchaseExpiration: null,
                  hideCode: false,
                  notificationConfig: null,
                  artworkUrl:
                    'https://ucarecdn.com/c0f0a144-50be-429d-8b4d-a59266f40057/',
                  pointsMultiplier: '1',
                  pointsPrefix: null,
                  pointsSuffix: null,
                },
                id: '5ce8d52d-5bb5-443b-b629-01ddbc2163b4',
                createdAt: '2024-10-17T09:01:26.561Z',
                updatedAt: '2024-10-17T09:01:26.561Z',
                priority: 2,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'REWARD',
                configuration: {
                  rewardId: '4c9c1d9d-bcb9-4d2b-a1dd-f6710ab29163',
                  showPrice: false,
                  id: '4c9c1d9d-bcb9-4d2b-a1dd-f6710ab29163',
                  createdAt: '2023-05-11T11:03:01.864Z',
                  updatedAt: '2024-07-17T10:45:41.896Z',
                  name: 'Pizza',
                  pictureUrl:
                    'https://ucarecdn.com/cbc5895e-a193-4a94-bb0f-d514719e36a6/',
                  value: 0,
                  price: 8,
                  priority: 0,
                  availability: {
                    start: '2023-05-11T11:01:53.703Z',
                    end: null,
                  },
                  purchasable: true,
                  tier: null,
                  category: {
                    name: 'Chicken Salad',
                    priority: 0,
                    type: 'REWARD',
                    id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
                    createdAt: '2023-05-05T10:39:57.595Z',
                    updatedAt: '2023-05-05T10:39:57.595Z',
                    description: null,
                    metadata: null,
                    pictureUrl:
                      'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
                  },
                  discounts: [],
                  summary: null,
                  redemptionMessage: null,
                  visibilityCriteria: null,
                  type: 'VOUCHER',
                  codeType: 'OTP',
                  code: null,
                  purchaseExpiration: null,
                  hideCode: false,
                  notificationConfig: null,
                  artworkUrl:
                    'https://ucarecdn.com/cbc5895e-a193-4a94-bb0f-d514719e36a6/',
                  pointsMultiplier: '1',
                  pointsPrefix: null,
                  pointsSuffix: null,
                },
                id: '6919d275-83c5-4fcd-9adf-959b869de4a7',
                createdAt: '2024-10-17T09:01:44.179Z',
                updatedAt: '2024-10-17T09:01:44.179Z',
                priority: 1,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'REWARD',
                configuration: {
                  rewardId: '4c9c1d9d-bcb9-4d2b-a1dd-f6710ab29163',
                  showPrice: true,
                  showArtwork: true,
                  showDetails: true,
                  pointsSuffix: 'pts',
                  id: '4c9c1d9d-bcb9-4d2b-a1dd-f6710ab29163',
                  createdAt: '2023-05-11T11:03:01.864Z',
                  updatedAt: '2024-07-17T10:45:41.896Z',
                  name: 'Pizza',
                  pictureUrl:
                    'https://ucarecdn.com/cbc5895e-a193-4a94-bb0f-d514719e36a6/',
                  value: 0,
                  price: 8,
                  priority: 0,
                  availability: {
                    start: '2023-05-11T11:01:53.703Z',
                    end: null,
                  },
                  purchasable: true,
                  tier: null,
                  category: {
                    name: 'Chicken Salad',
                    priority: 0,
                    type: 'REWARD',
                    id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
                    createdAt: '2023-05-05T10:39:57.595Z',
                    updatedAt: '2023-05-05T10:39:57.595Z',
                    description: null,
                    metadata: null,
                    pictureUrl:
                      'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
                  },
                  discounts: [],
                  summary: null,
                  redemptionMessage: null,
                  visibilityCriteria: null,
                  type: 'VOUCHER',
                  codeType: 'OTP',
                  code: null,
                  purchaseExpiration: null,
                  hideCode: false,
                  notificationConfig: null,
                  artworkUrl:
                    'https://ucarecdn.com/cbc5895e-a193-4a94-bb0f-d514719e36a6/',
                  pointsMultiplier: '1',
                  pointsPrefix: null,
                },
                id: '716dee3b-187e-46c0-b6f1-3dcada77376e',
                createdAt: '2024-10-17T09:02:34.068Z',
                updatedAt: '2024-10-17T09:02:34.068Z',
                priority: 0,
              },
            ],
          },
          {
            name: 'Section2',
            type: 'GRID',
            active: true,
            pointsMultiplier: '1',
            pointsPrefix: null,
            pointsSuffix: null,
            id: '84739810-37f5-4621-8433-8e0b61e09a5e',
            createdAt: '2024-10-15T13:36:00.204Z',
            updatedAt: '2024-10-15T13:36:00.204Z',
            title: null,
            description: null,
            priority: 1,
            tiles: [
              {
                tileHeight: 'HALF',
                active: true,
                type: 'TIER',
                configuration: {
                  type: 'CURRENT',
                  tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
                  progressType: 'NAME',
                  tier: {
                    id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
                    name: 'Bronze',
                    description: null,
                    artworkUrl: null,
                    pointsRequirement: 100,
                  },
                  pointsMultiplier: '1',
                  pointsPrefix: null,
                  pointsSuffix: null,
                },
                id: '89255d20-737a-4aa9-af12-9266b4b1dedf',
                createdAt: '2024-10-15T13:24:28.991Z',
                updatedAt: '2024-10-15T13:24:28.991Z',
                priority: 2,
              },
              {
                tileHeight: 'HALF',
                active: true,
                type: 'TIER',
                configuration: {
                  type: 'SPECIFIC',
                  tierId: '95a6405a-36d9-471e-9ccb-75088c6f2ba6',
                  progressType: 'POINTS',
                  tier: {
                    id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
                    name: 'Bronze',
                    description: null,
                    artworkUrl: null,
                    pointsRequirement: 100,
                  },
                  targetTier: {
                    id: '95a6405a-36d9-471e-9ccb-75088c6f2ba6',
                    name: 'Silver',
                    pointsRequirement: 2000,
                    attained: false,
                    artworkUrl: null,
                    earnedPoints: 300,
                  },
                  pointsMultiplier: '1',
                  pointsPrefix: null,
                  pointsSuffix: null,
                },
                id: '11ac9b70-f025-4184-8372-7acbf0ac08cd',
                createdAt: '2024-10-15T13:21:40.133Z',
                updatedAt: '2024-10-15T13:21:40.133Z',
                priority: 1,
              },
              {
                tileHeight: 'HALF',
                active: true,
                type: 'CONTENT',
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
          {
            name: 'Section3',
            type: 'GRID',
            active: true,
            pointsMultiplier: '1',
            pointsPrefix: null,
            pointsSuffix: null,
            id: '89957c3f-ac13-4a48-a49d-14d0e61fd294',
            createdAt: '2024-10-16T09:56:51.282Z',
            updatedAt: '2024-10-16T09:56:51.282Z',
            title: null,
            description: null,
            visibilityCriteria: null,
            priority: 0,
            tiles: [
              {
                tileHeight: 'FULL',
                active: true,
                type: 'BADGE',
                configuration: {
                  type: 'SPECIFIC',
                  badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
                  internalName: 'Epicurean Elite',
                  priority: 0,
                  internalDescription: null,
                  status: 'ACTIVE',
                  id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
                  createdAt: '2024-08-06T08:53:24.307Z',
                  updatedAt: '2024-08-06T08:53:24.307Z',
                  details: [
                    {
                      name: 'Epicurean Elite',
                      locale: 'en',
                      description:
                        'Granted to those who achieve the highest tier in the loyalty program.',
                      artworkUrl:
                        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
                      id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
                      createdAt: '2024-08-06T08:53:24.307Z',
                      updatedAt: '2024-08-06T08:53:24.307Z',
                    },
                  ],
                  count: 0,
                },
                id: '72bb5e51-fe61-4a06-8450-d49030db0a03',
                createdAt: '2024-10-16T09:47:56.359Z',
                updatedAt: '2024-10-16T09:47:56.359Z',
                priority: 3,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'BADGE',
                configuration: {
                  type: 'SPECIFIC',
                  badgeId: 'd3a2b1fa-3963-4117-8c6f-69e5f8fea009',
                  internalName: 'Tasty Trailblazer',
                  priority: 0,
                  internalDescription: null,
                  status: 'ACTIVE',
                  id: 'd3a2b1fa-3963-4117-8c6f-69e5f8fea009',
                  createdAt: '2024-08-06T08:52:49.093Z',
                  updatedAt: '2024-08-06T08:52:49.093Z',
                  details: [
                    {
                      name: 'Tasty Trailblazer',
                      locale: 'en',
                      description:
                        'Awarded for being among the first to try new menu items.',
                      artworkUrl:
                        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
                      id: '79021b66-a7cf-4809-bef9-872467c0cd66',
                      createdAt: '2024-08-06T08:52:49.093Z',
                      updatedAt: '2024-08-06T08:52:49.093Z',
                    },
                  ],
                  count: 0,
                },
                id: 'd879c91c-6395-4ce7-854e-d66290f93d24',
                createdAt: '2024-10-16T09:51:39.837Z',
                updatedAt: '2024-10-16T09:51:39.837Z',
                priority: 2,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'BADGE',
                configuration: {
                  type: 'LATEST_EARNED',
                  badgeId: '30528c0a-30c2-44aa-9640-25647b8a594c',
                  count: 0,
                },
                id: '06f6f433-31e5-40df-93be-9b780059266a',
                createdAt: '2024-10-16T09:51:08.965Z',
                updatedAt: '2024-10-16T09:51:08.965Z',
                priority: 1,
              },
              {
                tileHeight: 'FULL',
                active: true,
                type: 'BADGE',
                configuration: {
                  type: 'SPECIFIC',
                  badgeId: '56cc2812-0b42-41a8-8397-5a01096e3fd4',
                  internalName: 'Culinary Champion',
                  priority: 0,
                  internalDescription: null,
                  status: 'ACTIVE',
                  id: '56cc2812-0b42-41a8-8397-5a01096e3fd4',
                  createdAt: '2024-08-06T08:52:10.320Z',
                  updatedAt: '2024-08-06T08:52:10.320Z',
                  details: [
                    {
                      name: 'Culinary Champion',
                      locale: 'en',
                      description:
                        'Given to customers who reach a high total spend threshold.',
                      artworkUrl:
                        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
                      id: 'e49c6021-1572-41ff-bc58-1ddcb7e645ae',
                      createdAt: '2024-08-06T08:52:10.320Z',
                      updatedAt: '2024-08-06T08:52:10.320Z',
                    },
                  ],
                  count: 0,
                },
                id: '43e2a561-c50a-4ab2-8725-036fe9ef56a0',
                createdAt: '2024-10-16T09:50:07.651Z',
                updatedAt: '2024-10-16T09:50:07.651Z',
                priority: 0,
              },
            ],
          },
        ],
      },
    };

    // Actual API call (commented out for now)
    // return makeRequest(`/tile-management/group/${id}`);
  };

  const getSectionByID = async (id: string): Promise<any> => {
    // Mocked response for getSectionByID
    return {
      status: 'success',
      data: {
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
                pointsRequirement: 500,
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
                pointsRequirement: 500,
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
    };

    // Actual API call
    // return makeRequest(`/tile-management/section/${id}`);
  };

  const getTileByID = async (id: string): Promise<any> => {
    // Mocked response for getTileByID
    return {
      status: 'success',
      data: {
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
            pointsRequirement: 500,
            earnedPoints: 100,
            attained: false,
          },
        },
        id: 'ffd24e5f-1557-4100-b19a-837bfa8da460',
        createdAt: '2024-08-15T13:03:42.763Z',
        updatedAt: '2024-08-15T13:03:42.763Z',
        visibilityCriteria: null,
      },
    };

    // Actual API call
    // return makeRequest(`/tile-management/tile/${id}`);
  };

  const contextValue = React.useMemo(
    () => ({
      theme,
      setTheme,
      getGroupByID,
      getSectionByID,
      getTileByID,
    }),
    [theme, setTheme, getGroupByID, getSectionByID, getTileByID]
  );
  return (
    <WllSdkContext.Provider value={contextValue}>
      {children}
    </WllSdkContext.Provider>
  );
};

export const useWllSdk = (): WllSdkContextType => {
  const context = React.useContext(WllSdkContext);
  if (context === undefined) {
    throw new Error('useWllSdk must be used within a WllSdkProvider');
  }
  return context;
};
