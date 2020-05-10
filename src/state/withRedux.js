import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import throttle from 'lodash/throttle';
import {loadState, saveState} from 'src/utils/localStorage';
import createStore from './createStore';

/**
 * Utility Higher Order Component factory. Returns HOC which takes another
 * Component and wraps it with given Provider.
 */

const WithRedux = ({element}) => {
  const persistedState = loadState();
  const store = createStore(persistedState);
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );
  return <Provider store={store}>{element}</Provider>;
};

WithRedux.propTypes = {
  element: PropTypes.element.isRequired,
};

export default WithRedux;
