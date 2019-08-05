/*
 * @Author: linjianx 
 * @Date: 2019-08-05 11:45:09 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-05 11:48:47
 */
export const setStorage = (key: string, value: string) => {
  return new Promise((resolve) => {
    window.localStorage.setItem(key, value);
    resolve(true);
  });
}

export const removeStorage = (key: string) => {
  return new Promise((resolve) => {
    window.localStorage.removeItem(key);
    resolve(true);
  })
}