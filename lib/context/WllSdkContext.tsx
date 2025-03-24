import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigation } from '../hooks/useNavigationHandler';
import { TGroup } from '../types/group';
import { WithChildren } from '../types/helpers';
import { NavigationConfig } from '../types/navigation';
import { TSection } from '../types/section';
import { BaseThemeObject, ThemeContextType, ThemeObject } from '../types/theme';
import { CTALinkTarget, Tile } from '../types/tile';
import {
  useGetGroupByID,
  useGetSectionByID,
  useGetTileByID,
} from '../utils/apiHelpers';
import { defaultTheme, sizes } from '../utils/styling';
import {
  getAlphaDerivedColors,
  getDerivedColor,
  getDerivedColorPercentages,
  getReadableTextColor,
  validateTheme,
} from '../utils/themeHelpers';
import { ResponsiveProvider } from './ResponsiveContext';

type Fetcher = <T>(
  endpoint: string,
  options?: RequestInit
) => Promise<APIResponse<T>>;

export type SDKConfig = {
  apiKey: string;
  userToken?: string;
  fetcher?: Fetcher;
  locale?: string;
};

export type APIResponse<T> = {
  status: 'success' | 'error';
  data: T | null;
  error?: string;
};

type WllSdkContextType = ThemeContextType & {
  getGroupByID: (id: string) => Promise<APIResponse<TGroup>>;
  getSectionByID: (id: string) => Promise<APIResponse<TSection>>;
  getTileByID: (id: string) => Promise<APIResponse<Tile>>;
  handleNavigation: (link: string, target: CTALinkTarget) => Promise<void>;
} & Readonly<{
    readonly config: SDKConfig;
  }>;

type WllSdkProviderProps = WithChildren & {
  theme?: Partial<BaseThemeObject>;
  config: SDKConfig;
  navigationConfig?: NavigationConfig;
};

const createTheme = (baseTheme: Partial<BaseThemeObject> = {}): ThemeObject => {
  const mergedTheme = {
    ...defaultTheme,
    ...baseTheme,
  } as BaseThemeObject;



  return {
    ...mergedTheme,
    sizes,
    derivedBackground: getDerivedColor(mergedTheme.background),
    primaryText: getReadableTextColor(mergedTheme.primary),
    accentText: getReadableTextColor(mergedTheme.accent),
    positiveText: getReadableTextColor(mergedTheme.positive),
    negativeText: getReadableTextColor(mergedTheme.negative),
    derivedSurface: getDerivedColorPercentages(mergedTheme.surface),
    derivedSurfaceText: getDerivedColorPercentages(mergedTheme.surfaceText),
    alphaDerivedPrimary: getAlphaDerivedColors(mergedTheme.primary),
    alphaDerivedText: getAlphaDerivedColors(mergedTheme.text),
  };
};

const WllSdkContext = createContext<WllSdkContextType | undefined>(undefined);

export const WllSdkProvider = ({
  children,
  theme: providedTheme,
  config,
  navigationConfig = {},
}: WllSdkProviderProps): JSX.Element => {
  validateConfig(config);

  const [theme, setThemeState] = useState(() => {
    const themeToUse = providedTheme || {};
    if (!validateTheme(themeToUse)) {
      console.warn(
        'Invalid theme provided. Some required colors are missing or invalid.'
      );
    }
    return createTheme(themeToUse);
  });

  useEffect(() => {
    const themeToUse = providedTheme || {};
    if (!validateTheme(themeToUse)) {
      console.warn(
        'Invalid theme provided. Some required colors are missing or invalid.'
      );
    }



    setThemeState(createTheme(themeToUse));
  }, [providedTheme]);

  const setTheme = useCallback((newTheme: Partial<BaseThemeObject>) => {
    if (!validateTheme(newTheme)) {
      console.warn(
        'Invalid theme provided. Some required colors are missing or invalid.'
      );
    }
    setThemeState((prevTheme) => createTheme({ ...prevTheme, ...newTheme }));
  }, []);

  const getGroupByID = useGetGroupByID(config) as (
    id: string
  ) => Promise<APIResponse<TGroup>>;
  const getSectionByID = useGetSectionByID(config) as (
    id: string
  ) => Promise<APIResponse<TSection>>;
  const getTileByID = useGetTileByID(config) as (
    id: string
  ) => Promise<APIResponse<Tile>>;

  const handleNavigation = useNavigation(navigationConfig);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      getGroupByID,
      getSectionByID,
      getTileByID,
      handleNavigation,
      config,
    }),
    [
      theme,
      setTheme,
      getGroupByID,
      getSectionByID,
      getTileByID,
      handleNavigation,
      config,
    ]
  );
  return (
    <WllSdkContext.Provider value={contextValue}>
      <ResponsiveProvider>{children}</ResponsiveProvider>
    </WllSdkContext.Provider>
  );
};

export const useWllSdk = (): WllSdkContextType => {
  const context = useContext(WllSdkContext);
  if (context === undefined) {
    throw new Error('useWllSdk must be used within a WllSdkProvider');
  }
  return context;
};

/**
 * Validates the SDK configuration object
 * @param config - The configuration object to validate
 * @throws {Error} If apiKey is missing
 * @throws {Error} If locale is provided but not in ISO 639-1 format (e.g. 'en')
 */
const validateConfig = (config: SDKConfig): void => {
  if (!config.apiKey) {
    throw new Error('API key is required');
  }

  if (config.locale && !/^[a-z]{2}$/.test(config.locale)) {
    throw new Error(
      'Invalid locale format. Expected ISO 639-1 language code (e.g. "en")'
    );
  }
};
