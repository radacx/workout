import {
  NavigatorButtons,
  NavigatorStyle,
} from 'react-native-navigation';

export type ScreenProps<TProps> = {
  navigatorStyle?: NavigatorStyle;
  navigatorButtons?: NavigatorButtons;
  passProps: TProps;
};
