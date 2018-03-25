import { NavigationProps } from './NavigationProps';
import {
  ComponentClass,
  StatelessComponent,
} from 'react';

export type ComponentWithNavigationProps<S> = {
  component: ComponentClass<S> | StatelessComponent<S>,
  navigationProps: NavigationProps,
};

