import { TrainingSession } from '../models/data/TrainingSession';
import { homogenousObjectToArray } from './homogenousObjectToArray';
import { HomogenousObject } from '../models/HomogenousObject';

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
      (highest, current) => highest < current
        ? current
        : highest,
      Number.MIN_SAFE_INTEGER,
    );

  return {
    volumes,
    highestVolume,
  };
};
