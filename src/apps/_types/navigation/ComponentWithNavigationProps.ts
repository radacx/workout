import { NavigationProps } from './NavigationProps';
import {
  ComponentClass,
  StatelessComponent,
} from 'react';

export type ComponentWithNavigationProps<TProps> = {
  component: ComponentClass<TProps> | StatelessComponent<TProps>,
  navigationProps: NavigationProps,
};

