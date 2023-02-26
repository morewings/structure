import React, {useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useRootTheme, useTheme} from 'css-vars-hook';

import {theme as defaultTheme} from './theme';

/**
 * @component
 * @name ThemeProvider
 * @description Injects CSS theme on global level
 * @param {string} variableName - CSS variable name without `--` prefix
 */
export const ThemeProvider = ({children, theme = defaultTheme}) => {
  // useRootTheme(theme);
  const {setRef, style, setTheme} = useTheme(theme);
  console.log('theme', theme);
  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return (
    <div id="forge_theme_root" ref={setRef}>
      {children}
    </div>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
};
