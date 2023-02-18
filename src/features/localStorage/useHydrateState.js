import {useDispatch} from 'react-redux';
import {useCallback} from 'react';

import {loadState} from '@/features/localStorage/localStorage';
import {LOCALSTORAGE_HYDRATE} from '@/features/localStorage/actionTypes';

export const useHydrateState = () => {
  const dispatch = useDispatch();
  const hydrateState = useCallback(() => {
    // check if we have state from localStorage. Needed for Next.js
    const savedState = loadState();
    !!savedState &&
      dispatch({
        type: LOCALSTORAGE_HYDRATE,
        state: loadState(),
      });
    return !!savedState;
  }, [dispatch]);
  return {hydrateState};
};
