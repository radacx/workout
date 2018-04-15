import { TrainingSession } from '../../_types/data/TrainingSession';
import { homogenousObjectToArray } from './homogenousObjectToArray';
import { HomogenousObject } from '../../_types/HomogenousObject';

const toArray = homogenousObjectToArray;

export const test = (
  sessions: HomogenousObject<TrainingSession>,
  getTotalVolume: (sess: TrainingSession) => number,
) => {
  const volumes = toArray(sessions)
    .map(session => getTotalVolume(session));

  // mierka - highest = 70 %
  const highestVolume = volumes
    .reduce(
      (highest, current) => highest < current ? current : highest,
      Number.MIN_SAFE_INTEGER,
    );

  return {
    volumes,
    highestVolume,
  };
};
