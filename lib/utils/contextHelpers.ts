/**
 * Utility function that checks if a component context and its configuration exist.
 * Works for both tile contexts and banner contexts.
 *
 * @param context - The component context to validate (tileContext or bannerContext)
 * @returns `true` if both the context and its configuration exist, otherwise `false`
 */
export function isContextValid(context: any): boolean {
  return (
    context !== null &&
    context !== undefined &&
    context.configuration !== null &&
    context.configuration !== undefined
  );
}
