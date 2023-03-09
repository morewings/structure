import React from 'react';
import PropTypes from 'prop-types';
import {RootThemeProvider} from 'css-vars-hook';

import {theme as defaultTheme} from './theme';

/**
 * Injects CSS theme on global level
 */
export const ThemeProvider = ({children, theme = defaultTheme}) => {
  return <RootThemeProvider theme={theme}>{children}</RootThemeProvider>;
};

ThemeProvider.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
};
