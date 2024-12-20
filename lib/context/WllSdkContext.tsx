import React from 'react';
import { useNavigation } from '../hooks/useNavigationHandler';
import { TGroup } from '../types/group';
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
  handleNavigation: (link: string, target: CTALinkTarget) => void;
};

type WllSdkProviderProps = {
  children: React.ReactNode;
  theme?: Partial<BaseThemeObject>;
  config: SDKConfig;
  navigationConfig?: NavigationConfig;
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
    text,
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
    alphaDerivedText: getAlphaDerivedColors(text),
  };
};

const WllSdkContext = React.createContext<WllSdkContextType | undefined>(
  undefined
);

export const WllSdkProvider = ({
  children,
  theme: providedTheme,
  config,
  navigationConfig = {},
}: WllSdkProviderProps): JSX.Element => {
  const [theme, setThemeState] = React.useState(() =>
    createTheme(providedTheme || {})
  );

  React.useEffect(() => {
    setThemeState(createTheme(providedTheme || {}));
  }, [providedTheme]);

  const setTheme = React.useCallback((newTheme: Partial<BaseThemeObject>) => {
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

  const contextValue = React.useMemo(
    () => ({
      theme,
      setTheme,
      getGroupByID,
      getSectionByID,
      getTileByID,
      handleNavigation,
    }),
    [
      theme,
      setTheme,
      getGroupByID,
      getSectionByID,
      getTileByID,
      handleNavigation,
    ]
  );
  return (
    <WllSdkContext.Provider value={contextValue}>
      <ResponsiveProvider>{children}</ResponsiveProvider>
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
