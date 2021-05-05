/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return function(obj) {
    let result = obj;
    const pathArr = path.split('.');
    pathArr.forEach(item => {
      if (result === undefined) {
        return result;
      }

      result = result[item];
    });
    return result;
  };
}
