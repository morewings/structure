import {useEffect} from 'react';
import throttle from 'lodash/throttle';

import {store} from '@/state';

import {saveState} from './localStorage';

export const useSaveState = () => {
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
};
