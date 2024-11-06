import React from 'react';
import { TGroup } from '../types/group';
import { TSection } from '../types/section';
import { BaseThemeObject, ThemeContextType, ThemeObject } from '../types/theme';
import { Tile } from '../types/tile';
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

type Fetcher = <T>(
  endpoint: string,
  options?: RequestInit
) => Promise<APIResponse<T>>;

export type SDKConfig = {
  apiKey: string;
  userToken?: string;
  fetcher?: Fetcher;
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

  const getGroupByID = useGetGroupByID(config) as (
    id: string
  ) => Promise<APIResponse<TGroup>>;
  const getSectionByID = useGetSectionByID(config) as (
    id: string
  ) => Promise<APIResponse<TSection>>;
  const getTileByID = useGetTileByID(config) as (
    id: string
  ) => Promise<APIResponse<Tile>>;

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
