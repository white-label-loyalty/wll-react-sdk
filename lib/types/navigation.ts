export type NavigationType = 'external' | 'internal' | 'modal';

type NavigationHandlerParams = {
  target: string;
  windowTarget: string;
};

export type NavigationConfig = {
  navigationHandlers?: {
    external?: (params: NavigationHandlerParams) => Promise<void>;
    internal?: (params: NavigationHandlerParams) => Promise<void>;
    modal?: (params: NavigationHandlerParams) => Promise<void>;
  };
  external?: (params: NavigationHandlerParams) => Promise<void>;
  internal?: (params: NavigationHandlerParams) => Promise<void>;
  modal?: (params: NavigationHandlerParams) => Promise<void>;
  baseUrl?: string;
};
