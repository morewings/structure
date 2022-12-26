import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import throttle from 'lodash/throttle';

import {store} from '@/state';

import {LOCALSTORAGE_HYDRATE} from './actionTypes';
import {loadState, saveState} from './localStorage';

export const useLocalStorage = () => {
  const dispatch = useDispatch();
  const hydrateState = useCallback(() => {
    // check if we have state from localStorage. Needed for Next.js
    const savedState = loadState();
    !!savedState &&
      dispatch({
        type: LOCALSTORAGE_HYDRATE,
        state: loadState(),
      });
  }, [dispatch]);

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
  }, []);
  return hydrateState;
};
