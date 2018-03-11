import { ComponentWithNavigationProps } from '../models/ComponentWithNavigationProps';
import { Screen } from '../models/ComponentWithNavigationProps';

export const createNavigationProps =
  <T>(con: ComponentWithNavigationProps<T>) => (screen: Screen<T>, title?: string) => ({
  ...con.navigationProps,
  ...screen,
  title: title || con.navigationProps.title,
});
