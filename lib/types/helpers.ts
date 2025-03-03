/**
 * Makes a configuration type with required and optional fields,
 * providing default values for optional fields.
 */
export type SafeConfig<T, R extends keyof T> = Required<Pick<T, R>> &
  Partial<Omit<T, R>>;

/**
 * Adds optional children to any component props.
 */
export type WithChildren<T = {}> = T & { children?: React.ReactNode };
