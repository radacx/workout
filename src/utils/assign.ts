export const iassign = require('immutable-assign');

interface ICopyFunc {
  <T>(value: T, propName: string): T;
}

interface IIassignOption {
  freeze?: boolean;                        // Deep freeze both input and output
  freezeInput?: boolean;                   // Deep freeze input
  freezeOutput?: boolean;                  // Deep freeze output
  useConstructor?: boolean;                // Uses the constructor to create new instances
  copyFunc?: ICopyFunc;                    // Custom copy function, can be used to handle special types, e.g., Map, Set
  disableAllCheck?: boolean;
  disableHasReturnCheck?: boolean;
  // Disable validation for extra statements in the getProp() function,
  // which is needed when running the coverage, e.g., istanbul.js does add
  // instrument statements in our getProp() function, which can be safely ignored.
  disableExtraStatementCheck?: boolean;

  // Return the same object if setProp() returns its parameter (i.e., reference pointer not changed).
  ignoreIfNoChange?: boolean;
}

interface ISetPropFunc<TObj> {
  (prop: TObj): TObj;
}

interface IGetPropFunc<TObj, TProp, TContext> {
  (obj: TObj, context: TContext): TProp;
}

export const assignWithGet = <TObj, TProp, TContext>(obj: TObj, getProp: IGetPropFunc<TObj, TProp, TContext>, setProp: ISetPropFunc<TProp>, context?: TContext, option?: IIassignOption): TObj =>
  iassign(obj, getProp, setProp, context, option);


export const assign = <TObj>(obj: TObj, setProp: ISetPropFunc<TObj>, option?: IIassignOption): TObj =>
  iassign(obj, setProp, option);
