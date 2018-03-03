import { Store } from 'react-redux';
import { IAppState } from '../../../models/state/IAppState';
import { Navigation } from 'react-native-navigation';
import * as React from 'react';
import { INavigationProps } from '../../../models/interfaces/INavigationProps';

export const registerScreens = (st: Store<IAppState>, provider: any, screens: (React.ComponentType<any> & { NavigationProps: INavigationProps })[]) => {
  Object
    .keys(screens)
    .forEach((key: any) => {
      const screen = screens[key];

      Navigation.registerComponent(
        screen.NavigationProps.screen,
        () => screen,
        st,
        provider
      );
    });
};
