/***
 *
 * @param a ['image-7', 'image-8']
 * @param b ['image-70', 'image-80']
 * @param c []
 * @returns {*} cartesian result [['image-7', 'image-70'],['image-7', 'image-80'],['image-8', 'image-70'],['image-8', 'image-80']]
 */
export const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
export const f = (a, b) =>
    [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));
