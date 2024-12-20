import { ImageProps, ViewStyle } from 'react-native';

export type ImagePropsNoSource = Omit<ImageProps, 'source'>;

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type Justify =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

export type LayoutProps = {
  children: React.ReactNode;
  justify?: Justify;
  align?: Align;
  direction?: FlexDirection;
  style?: ViewStyle;
};

export const justifyMap: Record<Justify, ViewStyle['justifyContent']> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
} as const;

export const alignMap: Record<Align, ViewStyle['alignItems']> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline',
} as const;
