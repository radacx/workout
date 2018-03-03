import { Store } from 'react-redux';
import { IAppState } from '../../../models/state/IAppState';
import { Navigation } from 'react-native-navigation';
import * as React from 'react';
import { ComponentClass } from 'react';
import { IHasNavigationProps } from '../../../models/interfaces/IHasNavigationProps';
import { INavigationProps } from '../../../models/interfaces/INavigationProps';

type Container = {
  container: ComponentClass<any>,
  NavigationProps: INavigationProps,
};
type Component = React.ComponentType<any> | Container;

export const registerScreens = (st: Store<IAppState>, provider: any, screens: (Component & IHasNavigationProps)[]) => {
  Object
    .keys(screens)
    .forEach((key: any) => {
      const screen = screens[key];
      const registeredScreen = (<Container>screen).container || (<React.ComponentType<any>>screen);

      Navigation.registerComponent(
        screen.NavigationProps.screen,
        () => registeredScreen,
        st,
        provider
      );
    });
};
