import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import throttle from 'lodash/throttle';
import {loadState, saveState} from 'src/utils/localStorage';
import createStore from './createStore';

const LocalStorageProvider = ({children}) => {
  const persistedState = loadState();
  const store = createStore(persistedState);

  useEffect(() => {
    const removeListener = store.subscribe(
      throttle(() => {
        saveState({
          structure: store.getState().structure,
          accordion: store.getState().accordion,
        });
      }, 1000)
    );
    return () => {
      removeListener();
    };
  });
  return <Provider store={store}>{children}</Provider>;
};

LocalStorageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LocalStorageProvider;
