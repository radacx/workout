import PropTypes from 'prop-types';
import React from 'react';
import { SpecialSelectTransformed } from './SpecialSelectTransformed';
import { SpecialSelectOption } from './_types/SpecialSelectOption';
import { SpecialSelectSelection } from './_types/SpecialSelectSelection';
import { SwitchItems } from './_types/SwitchItems';
import { Validation } from '../../../_types/validation/Validation';

type Props = {
  readonly options: SpecialSelectOption[];
  readonly onSubmit: (selectedOptions: SpecialSelectSelection[]) => void;
  readonly preselectedOptions?: SpecialSelectSelection[];
};

const propTypes: Validation<Props> = {
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  preselectedOptions: PropTypes.arrayOf(PropTypes.any),
};

const SpecialSelect: React.SFC<Props> = ({ options, onSubmit, preselectedOptions }) => {
  const switchOptions: SwitchItems[] = options.map((option, index) => (
    {
      label: option.label,
      initial: preselectedOptions
        ? preselectedOptions[index] || SpecialSelectSelection.Default
        : SpecialSelectSelection.Default,
      options: [
        {
          label: option.leftValue,
          value: SpecialSelectSelection.Left,
        }, {
          label: 'OFF',
          value: SpecialSelectSelection.Default,
        }, {
          label: option.rightValue,
          value: SpecialSelectSelection.Right,
        },
      ],
    }
  ));

  return (
    <SpecialSelectTransformed
      switchOptions={switchOptions}
      onSubmit={onSubmit}
      preselectedOptions={preselectedOptions}
    />
  );
};

SpecialSelect.displayName = 'SpecialSelect';
SpecialSelect.propTypes = propTypes;

export { SpecialSelect };
