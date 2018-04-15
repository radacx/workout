import { SpecialSelectSelection } from './SpecialSelectSelection';
import { SwitchItem } from './SwitchItem';

export type SwitchItems = {
  label?: string;
  initial: SpecialSelectSelection;
  options: SwitchItem[];
};
