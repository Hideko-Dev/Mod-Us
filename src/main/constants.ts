export const isDevelopment: boolean = process.env.IS_DEV === "true"

// @ts-expect-error
// eslint-disable-next-line no-undef,@typescript-eslint/no-unsafe-assignment
export const MANAGER_VERSION: string = __MANAGER_VERSION
