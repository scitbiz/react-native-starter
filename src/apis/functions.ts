/**
 * A simple {@link Promise} timeout to give some delay
 *
 * @param ms The time to delay (in millisecond)
 */
export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))
