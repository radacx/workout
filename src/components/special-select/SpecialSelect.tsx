import React from 'react';
import { SpecialSelectTransformed } from './SpecialSelectTransformed';
import { SpecialSelectOption } from './SpecialSelectOption';
import { SpecialSelectSelection } from './SpecialSelectSelection';
import { SwitchItems } from './SwitchItems';

type Props = Readonly<{
  options: SpecialSelectOption[];
  preselectedOptions?: SpecialSelectSelection[];
  onSubmit: (selectedOptions: SpecialSelectSelection[]) => void;
}>;

const SpecialSelect: React.SFC<Props> = ({ options, onSubmit, preselectedOptions }) => {
  const switchOptions: SwitchItems[] = options.map((option, index) => ({
    label: option.label,
    initial: preselectedOptions
      ? (preselectedOptions[ index ]
        || SpecialSelectSelection.Default)
      : SpecialSelectSelection.Default,
    options: [
      {
        label: option.leftValue,
        value: SpecialSelectSelection.Left,
      },
      {
        label: 'OFF',
        value: SpecialSelectSelection.Default,
      },
      {
        label: option.rightValue,
        value: SpecialSelectSelection.Right,
      },
    ],
  }));

  return (
    <SpecialSelectTransformed
      switchOptions={switchOptions}
      onSubmit={onSubmit}
      preselectedOptions={preselectedOptions}
    />
  );
};

SpecialSelect.displayName = 'SpecialSelect';

export { SpecialSelect };
