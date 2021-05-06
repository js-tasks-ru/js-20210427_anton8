/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let result = '';
  let [currentSymbol] = string;
  let currentSubstring = '';

  for (let symbol of string) {
    if (symbol !== currentSymbol) {
      result += currentSubstring.slice(0, size);
      currentSubstring = '';
      currentSymbol = symbol;
    }

    currentSubstring += symbol;
  }

  result += currentSubstring.slice(0, size);

  return result;
}
