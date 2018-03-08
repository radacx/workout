import { Guid } from '../Guid';

export type Zanorenie = {
  sessionId: Guid;
  exerciseId: Guid;
  setId: Guid;
};

type HasZanorenie = {
  zanorenie: Zanorenie;
};

type IHasItemOfType<T> = {
  item: T;
};

export type WithZanorenie<T> = HasZanorenie & IHasItemOfType<T>;
