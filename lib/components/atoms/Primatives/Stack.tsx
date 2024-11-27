import { View } from 'react-native';
import { LayoutProps, alignMap, justifyMap } from '.';

export const Stack: React.FC<LayoutProps> = ({
  children,
  justify = 'start',
  align = 'stretch',
  direction = 'column',
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: direction,
          justifyContent: justifyMap[justify],
          alignItems: alignMap[align],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
