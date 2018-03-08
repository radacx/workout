import { ComponentWithNavigationProps } from '../models/ComponentWithNavigationProps';
import { Screen } from '../models/ComponentWithNavigationProps';

export const createNavigationProps =
  <T>(con: ComponentWithNavigationProps<T>) => (screen: Screen<T>) => ({
  ...con.navigationProps,
  ...screen,
});
