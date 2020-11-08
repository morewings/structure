import {useRef, useCallback} from 'react';
import {curry} from 'ramda';

/** @function
 * @name setCSSVariable
 * @description Set CSS variable
 * @param {HTMLElement} element - HTML element to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @param {string} value
 * @return {void}
 */
export const setCSSVariable = curry((element, variableName, value) => {
  console.log('setCSSVariable', element);
  element && element.style.setProperty(`--${variableName}`, value);
});

/** @function
 * @name removeCSSVariable
 * @description Remove CSS variable
 * @param {HTMLElement} element - HTML element to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @return {void}
 */
export const removeCSSVariable = (element, variableName) => {
  element && element.style.removeProperty(`--${variableName}`);
};

/** @function
 * @name getCSSVariable
 * @description Get CSS variable value
 * @param {HTMLElement} element - HTML element to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @return {string}
 */
export const getCSSVariable = curry(
  (element, variableName) =>
    element && element.style.getPropertyValue(`--${variableName}`)
);

/** @function
 * @name useSetCssVariable
 * @description React hook to set CSS variable returns ref function. Returns tuple [getter, setter]
 * @param {string} name - HTML element to contain variable
 * @param {string} value - variable name
 * @return {[React.MutableRefObject<null>, Function]}
 */
export const useSetCssVariable = (name, value) => {
  const ref = useRef(null);
  const setRef = element => {
    if (element) {
      setCSSVariable(element, name, value);
    }
    ref.current = element;
  };

  return [ref, setRef];
};

const createStyleObject = theme => {
  // eslint-disable-next-line no-shadow
  const keys = Object.keys(theme);
  const result = {};
  keys.forEach(key => {
    // eslint-disable-next-line fp/no-mutation
    result[`--${key}`] = theme[key];
  });
  return result;
};

/** @function
 * @name useSetCssVariable
 * @description React hook to set CSS variable returns ref function. Returns tuple [getter, setter]
 * @param {Object.<string, number|string>} theme - theme object, Record-like
 * @return {{ref: React.MutableRefObject<null>, setRef: (function(*=): void), setVariable: *, style: {}, getVariable: *}}
 */
export const useSetCssTheme = theme => {
  const ref = useRef(null);
  const setVariable = (variableName, value) => {
    const element = ref.current;
    console.log('click 2', ref.current);
    setCSSVariable(element, variableName, value);
  };
  const getVariable = getCSSVariable(ref.current);
  const style = createStyleObject(theme);

  const setRef = useCallback(element => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (element) {
      Object.keys(theme).forEach(key => {
        const isEqual = getCSSVariable(element, key) === theme[key];
        !isEqual && setCSSVariable(element, key, theme[key]);
      });
    }

    // Save a reference to the node
    ref.current = element;
  }, []);

  return {ref, setRef, style, setVariable, getVariable};
};
