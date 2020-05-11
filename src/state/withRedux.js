import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import throttle from 'lodash/throttle';
import {loadState, saveState} from 'src/utils/localStorage';
import createStore from './createStore';

const persistedState = loadState();
const store = createStore(persistedState);
const removeListener = store.subscribe(
  throttle(() => {
    saveState({
      structure: store.getState().structure,
    });
  }, 1000)
);

window.addEventListener('beforeunload', event => {
  removeListener();
});

const ReduxProvider = ({element}) => (
  <Provider store={store}>{element}</Provider>
);

ReduxProvider.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ReduxProvider;
