import React from 'react';
import PropTypes from 'prop-types';
import {Provider as ReduxProvider} from 'react-redux';

import {store} from './state';

export const Provider = ({children}) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
