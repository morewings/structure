import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useRootTheme} from 'css-vars-hook';

import {theme as defaultTheme} from './theme';

/**
 * @component
 * @name ThemeProvider
 * @description Injects CSS theme on global level
 * @param {string} variableName - CSS variable name without `--` prefix
 */
export const ThemeProvider = ({children, theme = defaultTheme}) => {
  useRootTheme(theme);
  return <Fragment>{children}</Fragment>;
};

ThemeProvider.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
};
