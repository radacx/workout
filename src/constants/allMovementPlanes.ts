import { MovementPlane } from '../models/enums/MovementPlane';

export const allMovementPlanes: MovementPlane[] =
  Object
    .keys(MovementPlane)
    .map(key => MovementPlane[key]);
