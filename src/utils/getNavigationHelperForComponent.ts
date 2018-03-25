import { ComponentWithNavigationProps } from '../models/navigation/ComponentWithNavigationProps';
import { ScreenProps } from '../models/navigation/ScreenProps';

export const getNavigationHelperForComponent =
  <T>(con: ComponentWithNavigationProps<T>) =>
    new class {
      private title = con.navigationProps.title;

      setTitle = (title: string) =>
        this.title = title;

      createNavParams = (screenProps: ScreenProps<T>) => ({
        ...con.navigationProps,
        ...screenProps,
        title: this.title,
      });
    };
