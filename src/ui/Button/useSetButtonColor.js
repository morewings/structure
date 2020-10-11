import {useRef} from 'react';
import {setCSSVariable} from 'src/utils/cssVariables';

export const useSetIconColor = (color) => {
  const ref = useRef(null);
  const setRef = element => {
    if (element) {
      setCSSVariable(element, 'iconColor', color);
    }
    ref.current = element;
  };

  return setRef;
};
