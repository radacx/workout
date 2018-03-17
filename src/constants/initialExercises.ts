import { ExerciseType } from '../models/enums/ExerciseType';
import { MovementPlane } from '../models/enums/MovementPlane';
import { MuscleGroup } from '../models/enums/MuscleGroup';
import { Exercise } from '../models/Exercise';

// Bodyweight exercises
export const pullUps: Exercise = {
  id: 'pull-ups',
  exerciseType: ExerciseType.Reps,
  name: 'Pull ups',
  relativeBodyweight: 93,
  planesOfMovement: [
    MovementPlane.ShoulderAdduction,
    MovementPlane.ShoulderDepression,
    MovementPlane.ShoulderExtension,
    MovementPlane.ShoulderRetraction
  ],
  primaryMuscleGroups: [
    MuscleGroup.Lats,
  ],
  secondaryMuscleGroups: [
    MuscleGroup.Biceps,
    MuscleGroup.DeltsRear,
    MuscleGroup.Forearms,
  ],
};
export const dips: Exercise = {
  id: 'dips',
  secondaryMuscleGroups: [
    MuscleGroup.DeltsFront,
    MuscleGroup.TrapsUpper,
  ],
  primaryMuscleGroups: [
    MuscleGroup.Chest,
    MuscleGroup.Triceps,
  ],
  planesOfMovement: [
    MovementPlane.ShoulderDepression,
    MovementPlane.ShoulderAdduction,
  ],
  relativeBodyweight: 93,
  name: 'Dips',
  exerciseType: ExerciseType.Reps,
};
export const pushUps: Exercise = {
  exerciseType: ExerciseType.Reps,
  name: 'Push ups',
  relativeBodyweight: 65,
  planesOfMovement: [
    MovementPlane.ShoulderFlexion,
    MovementPlane.ShoulderProtraction,
  ],
  primaryMuscleGroups: [
    MuscleGroup.Chest
  ],
  secondaryMuscleGroups: [
    MuscleGroup.Triceps,
    MuscleGroup.DeltsFront,
  ],
  id: 'push-ups',
};
export const handstandPushUps: Exercise = {
  relativeBodyweight: 90,
  id: 'handstand-push-ups',
  secondaryMuscleGroups: [
    MuscleGroup.SerratusAnterior,
    MuscleGroup.TrapsUpper,
  ],
  primaryMuscleGroups: [
    MuscleGroup.Triceps,
    MuscleGroup.DeltsFront,
  ],
  planesOfMovement: [
    MovementPlane.ShoulderElevation,
  ],
  exerciseType: ExerciseType.Reps,
  name: 'Handstand push ups',
};

// Weightlifting exercises
export const cableRows: Exercise = {
  id: 'cable-rows',
  secondaryMuscleGroups: [
    MuscleGroup.Biceps,
    MuscleGroup.DeltsRear,
  ],
  primaryMuscleGroups: [
    MuscleGroup.Rhomboids,
    MuscleGroup.TrapsLower,
  ],
  planesOfMovement: [
    MovementPlane.ShoulderDepression,
    MovementPlane.ShoulderRetraction,
  ],
  exerciseType: ExerciseType.Reps,
  name: 'Cable rows',
};
export const overheadPress: Exercise = {
  name: 'Overhead press',
  exerciseType: ExerciseType.Reps,
  planesOfMovement: [
    MovementPlane.ShoulderElevation,
  ],
  primaryMuscleGroups: [
    MuscleGroup.DeltsFront,
    MuscleGroup.Triceps,
  ],
  secondaryMuscleGroups: [
    MuscleGroup.TrapsUpper,
    MuscleGroup.SerratusAnterior,
  ],
  id: 'overhead-press',
};
export const bicepsCurls: Exercise = {
  id: 'biceps-curls',
  secondaryMuscleGroups: [
    MuscleGroup.Forearms,
  ],
  primaryMuscleGroups: [
    MuscleGroup.Biceps,
  ],
  planesOfMovement: [],
  exerciseType: ExerciseType.Reps,
  name: 'Biceps curls',
};

// Core & Lowerback
export const hangingLegRaises: Exercise = {
  name: 'Hanging leg raises',
  exerciseType: ExerciseType.Reps,
  planesOfMovement: [],
  primaryMuscleGroups: [
    MuscleGroup.Abs,
  ],
  secondaryMuscleGroups: [],
  id: 'hanging-leg-raises',
  relativeBodyweight: 35,
} ;
export const dragonFlags: Exercise = {
  relativeBodyweight: 70,
  name: 'Dragon flags',
  exerciseType: ExerciseType.Reps,
  planesOfMovement: [],
  primaryMuscleGroups: [
    MuscleGroup.Abs,
  ],
  secondaryMuscleGroups: [],
  id: 'dragon-flags',
};
export const reverseLegRaises: Exercise = {
  id: 'reverse-leg-raises',
  secondaryMuscleGroups: [],
  primaryMuscleGroups: [
    MuscleGroup.LowerBack,
  ],
  planesOfMovement: [],
  exerciseType: ExerciseType.Reps,
  name: 'Reverse leg raises',
  relativeBodyweight: 30,
};
export const backHyperExtensions: Exercise = {
  relativeBodyweight: 20,
  name: 'Back hyperextensions',
  exerciseType: ExerciseType.Reps,
  planesOfMovement: [],
  primaryMuscleGroups: [
    MuscleGroup.LowerBack,
  ],
  secondaryMuscleGroups: [],
  id: 'back-hyper-extensions',
};

// Legs
export const splitSquats: Exercise = {
  id: 'split-squats',
  exerciseType: ExerciseType.Reps,
  name: 'Split squats',
  planesOfMovement: [],
  primaryMuscleGroups: [
    MuscleGroup.Hamstrings,
    MuscleGroup.Quadriceps,
  ],
  relativeBodyweight: 70,
  secondaryMuscleGroups: [],
};
export const frontSquats: Exercise = {
  secondaryMuscleGroups: [
    MuscleGroup.Hamstrings,
  ],
  primaryMuscleGroups: [
    MuscleGroup.Quadriceps,
  ],
  relativeBodyweight: 70,
  planesOfMovement: [],
  name: 'Front squats',
  exerciseType: ExerciseType.Reps,
  id: 'front-squats',
};
export const calfRaises: Exercise = {
  id: 'calf-raises',
  exerciseType: ExerciseType.Reps,
  name: 'Calf raises',
  planesOfMovement: [],
  relativeBodyweight: 95,
  primaryMuscleGroups: [
    MuscleGroup.Calves,
  ],
  secondaryMuscleGroups: [],
};

// Statics
export const frontLever: Exercise = {
  secondaryMuscleGroups: [],
  primaryMuscleGroups: [],
  relativeBodyweight: 90,
  planesOfMovement: [
    MovementPlane.ShoulderRetraction,
    MovementPlane.ShoulderDepression,
  ],
  name: 'Front lever',
  exerciseType: ExerciseType.Duration,
  id: 'Front lever',
};
export const plancheLean: Exercise = {
  id: 'planche-lean',
  exerciseType: ExerciseType.Duration,
  name: 'Planche lean',
  planesOfMovement: [
    MovementPlane.ShoulderProtraction,
    MovementPlane.ShoulderDepression,
  ],
  relativeBodyweight: 80,
  primaryMuscleGroups: [
    MuscleGroup.SerratusAnterior,
  ],
  secondaryMuscleGroups: [
    MuscleGroup.Abs,
    MuscleGroup.DeltsRear,
  ],
};
