import { INavigationProps } from './interfaces/INavigationProps';
import {
  NavigatorButtons,
  NavigatorStyle,
} from 'react-native-navigation';
import {
  ComponentClass,
  StatelessComponent,
} from 'react';

export type ComponentWithNavigationProps<S> = {
  component: ComponentClass<S> | StatelessComponent<S>,
  navigationProps: INavigationProps,
};

export type Screen<R> = {
  navigatorStyle?: NavigatorStyle;
  navigatorButtons?: NavigatorButtons;
  passProps: R;
};
