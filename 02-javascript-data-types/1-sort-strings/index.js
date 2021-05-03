/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const compareParams = [['ru', 'en'], { caseFirst: 'upper' }];

  const compareFn = (param === 'asc')
    ? (a, b) => a.localeCompare(b, ...compareParams)
    : (a, b) => b.localeCompare(a, ...compareParams);

  return [...arr].sort(compareFn);
}
