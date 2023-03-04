import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from 'css-vars-hook';

import config from '@/config';

import {theme as defaultTheme} from './theme';

/**
 * @component
 * @name ThemeProvider
 * @description Injects CSS theme on global level
 * @param {string} variableName - CSS variable name without `--` prefix
 */
export const ThemeProvider = ({children, theme = defaultTheme}) => {
  const {setRef, setTheme, style} = useTheme(theme);
  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);
  return (
    <div id={config.rootId} style={style} ref={setRef}>
      {children}
    </div>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
};
