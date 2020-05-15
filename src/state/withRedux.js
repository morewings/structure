import React from 'react';
import PropTypes from 'prop-types';
import Provider from './LocalStorageProvider';

const ReduxProvider = ({element}) => <Provider>{element}</Provider>;

ReduxProvider.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ReduxProvider;
