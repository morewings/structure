import React from 'react';
import PropTypes from 'prop-types';
import Provider from './LocalStorageProvider';

/*
 * This is not React component, but ordinary function
 * used to wrap pages. React hooks would not work here.
 */
const ReduxWrapper = ({element}) => <Provider>{element}</Provider>;

ReduxWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ReduxWrapper;
