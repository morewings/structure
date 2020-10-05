import {useEffect} from 'react';
import {setCSSVariable} from 'src/utils/cssVariables';

export const useSetIconColor = (iconRef, color) => {
  const element = iconRef.current;
  useEffect(() => {
    element && color && setCSSVariable(element, 'iconColor', color);
  }, [element, color]);
};
