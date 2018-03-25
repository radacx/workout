import { Store } from 'react-redux';
import { AppState } from '../models/state/AppState';
import { Navigation } from 'react-native-navigation';
import { ComponentWithNavigationProps } from '../models/navigation/ComponentWithNavigationProps';

type collection = {
  [ index: string ]: ComponentWithNavigationProps<any>;
};

export const registerScreens = (
  st: Store<AppState>,
  provider: any,
  screens: collection,
) => {
  Object
    .keys(screens)
    .forEach((key: any) => {
      const screen = screens[ key ];

      Navigation.registerComponent(
        screen.navigationProps.screen,
        () => screen.component,
        st,
        provider,
      );
    });
};
