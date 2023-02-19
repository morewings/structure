import {useEffect} from 'react';

/**
 * @function
 * useActionTimer
 * React hook runs provided callback after time in seconds provided
 * @param {function} callback - Function to run when timer ends
 * @param {number} timeout - Timeout value in seconds
 * @param {boolean} [condition = true] - Set boolean flag to run callback
 */
export const useActionTimer = (callback, timeout, condition = true) => {
  useEffect(() => {
    const delay = timeout * 1000;
    if (condition) {
      const timeOutId = setTimeout(() => {
        callback();
      }, delay);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [callback, timeout, condition]);
};
