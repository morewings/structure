import {useRef} from 'react';

/** @function
 * @name setCSSVariable
 * @description Set CSS variable
 * @param {HTMLElement} element - HTML element to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @param {string} value
 * @return {void}
 */
export const setCSSVariable = (element, variableName, value) => {
  element && element.style.setProperty(`--${variableName}`, value);
};

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
export const getCSSVariable = (element, variableName) =>
  element && element.style.getPropertyValue(`--${variableName}`);

/** @function
 * @name useSetCssVariable
 * @description React hook to set CSS variable returns ref function. Returns tuple [getter, setter]
 * @param {string} name - HTML element to contain variable
 * @param {string} value - variable name
 * @return {(React.MutableRefObject<null>|Function)[]}
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
