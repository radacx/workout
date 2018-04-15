import { HomogenousObject } from '../../_types/HomogenousObject';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { FormIds } from '../../_types/navigation/FormIds';

export type TrainingLogAppStoreState = {
  readonly sessions: HomogenousObject<TrainingSession>;
  readonly formIds: FormIds;
};
