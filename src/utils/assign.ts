export const iassign = require('immutable-assign');

interface CopyFunc {
  <T>(value: T, propName: string): T;
}

interface IassignOption {
  freeze?: boolean;                        // Deep freeze both input and output
  freezeInput?: boolean;                   // Deep freeze input
  freezeOutput?: boolean;                  // Deep freeze output
  useConstructor?: boolean;                // Uses the constructor to create new instances
  copyFunc?: CopyFunc;                    // Custom copy function, can be used to handle special types, e.g., Map, Set
  disableAllCheck?: boolean;
  disableHasReturnCheck?: boolean;
  // Disable validation for extra statements in the getProp() function,
  // which is needed when running the coverage, e.g., istanbul.js does add
  // instrument statements in our getProp() function, which can be safely ignored.
  disableExtraStatementCheck?: boolean;

  // Return the same object if setProp() returns its parameter (i.e., reference pointer not changed).
  ignoreIfNoChange?: boolean;
}

interface SetPropFunc<TObj> {
  (prop: TObj): TObj;
}

interface GetPropFunc<TObj, TProp, TContext> {
  (obj: TObj, context: TContext): TProp;
}

export const assignWithGet = <TObj, TProp, TContext>(
  obj: TObj,
  getProp: GetPropFunc<TObj, TProp, TContext>,
  setProp: SetPropFunc<TProp>,
  context?: TContext,
  option?: IassignOption,
): TObj =>
  iassign(obj, getProp, setProp, context, option);


export const assign = <TObj>(
  obj: TObj,
  setProp: SetPropFunc<TObj>,
  option?: IassignOption,
): TObj =>
  iassign(obj, setProp, option);
