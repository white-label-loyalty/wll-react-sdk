import { ViewStyle } from 'react-native';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Justify =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';
export type Align = 'start' | 'end' | 'center' | 'stretch';

export type LayoutProps = {
  children: React.ReactNode;
  justify?: Justify;
  align?: Align;
  direction?: FlexDirection;
  style?: ViewStyle;
};

export const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
} as const;

export const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const;

export { Column } from './Column';
export { Row } from './Row';
export { FlexBox } from './FlexBox';
export { Stack } from './Stack';
