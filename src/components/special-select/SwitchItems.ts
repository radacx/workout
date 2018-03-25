import { SpecialSelectSelection } from './SpecialSelectSelection';
import { SwitchItem } from './SwitchItem';

export interface SwitchItems {
  label?: string;
  initial: SpecialSelectSelection;
  options: SwitchItem[];
}
