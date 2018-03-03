import { ComponentClass } from 'react';
import { INavigationProps } from '../models/interfaces/INavigationProps';

export const connectWithNavigationProps = (container: ComponentClass<any>, NavigationProps: INavigationProps) => ({
  container,
  NavigationProps,
});
