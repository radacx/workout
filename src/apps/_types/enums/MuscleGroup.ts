export enum MuscleGroup {
  Chest = 'Chest',
  Lats = 'Lats',
  Biceps = 'Biceps',
  Triceps = 'Triceps',
  Forearms = 'Forearms',
  DeltsFront = 'Front delts',
  DeltsRear = 'Rear delts',
  DeltsLat = 'Lateral delts',
  TrapsUpper = 'Upper traps',
  TrapsLower = 'Lower traps',
  Abs = 'Abs',
  LowerBack = 'LowerBack',
  SerratusAnterior = 'Serratus Anterior',
  Rhomboids = 'Rhomboids',
  Quadriceps = 'Quadriceps',
  Hamstrings = 'Hamstrings',
  Calves = 'Calves',
}

export const allMuscleGroups = Object
  .keys(MuscleGroup)
  .map((k: any) => MuscleGroup[k]);
