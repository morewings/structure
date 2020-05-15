import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import throttle from 'lodash/throttle';
import {loadState, saveState} from '../utils/localStorage';
import createStore from './createStore';

const LocalStorageProvider = ({children}) => {
  const persistedState = loadState();
  const store = createStore(persistedState);

  useEffect(() => {
    const removeListener = store.subscribe(
      throttle(() => {
        saveState({
          structure: store.getState().structure,
        });
      }, 1000)
    );
    return () => {
      removeListener();
    };
  });
  return (
    <Fragment>
      <Provider store={store}>{children}</Provider>
    </Fragment>
  );
};

LocalStorageProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LocalStorageProvider;
