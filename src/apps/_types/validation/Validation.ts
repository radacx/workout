import { Validator } from 'prop-types';

export type Validation<TProps> = {
  [K in keyof TProps]-?: Validator<TProps>
};
