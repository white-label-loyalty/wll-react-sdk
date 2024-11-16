export type NavigationType = 'external' | 'internal' | 'modal';

type NavigationHandlerParams = {
  target: string;
  windowTarget: string;
};

export type NavigationConfig = {
  navigationHandlers?: {
    external?: (params: NavigationHandlerParams) => void;
    internal?: (params: NavigationHandlerParams) => void;
    modal?: (params: NavigationHandlerParams) => void;
  };
  baseUrl?: string;
};
