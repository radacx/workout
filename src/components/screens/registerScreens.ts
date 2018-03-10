import { Store } from 'react-redux';
import { IAppState } from '../../models/state/IAppState';
import { Navigation } from 'react-native-navigation';
import { ComponentWithNavigationProps } from '../../models/ComponentWithNavigationProps';

type collection = {
  [index: string]: ComponentWithNavigationProps<any>;
};

export const registerScreens = (st: Store<IAppState>, provider: any, screens: collection) => {
  Object
    .keys(screens)
    .forEach((key: any) => {
      const screen = screens[key];

      Navigation.registerComponent(
        screen.navigationProps.screen,
        () => screen.component,
        st,
        provider
      );
    });
};
