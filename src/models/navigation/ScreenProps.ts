import {
  NavigatorButtons,
  NavigatorStyle,
} from 'react-native-navigation';

export type ScreenProps<R> = {
  navigatorStyle?: NavigatorStyle;
  navigatorButtons?: NavigatorButtons;
  passProps: R;
};
