import { Store } from 'react-redux';
import { IStore } from '../apps/_shared/store/IStore';
import { Navigation } from 'react-native-navigation';
import { ComponentWithNavigationProps } from '../apps/_types/navigation/ComponentWithNavigationProps';

type Screens = {
  [index: string]: ComponentWithNavigationProps<any>;
};

export const registerScreens = (
  store: Store<IStore>,
  provider: any,
  screens: Screens,
) => {
  Object
    .keys(screens)
    .forEach((key: string) => {
      const screen = screens[key];

      Navigation.registerComponent(
        screen.navigationProps.screen,
        () => screen.component,
        store,
        provider,
      );
    });
};
