export type ActionCreator<T> = (...args: any[]) => { readonly type: T };
