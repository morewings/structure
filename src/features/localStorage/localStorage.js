import config from '@/config';

export const loadState = () => {
  try {
    const serializedState =
      typeof window !== 'undefined' ? window.localStorage.getItem(config.localstorageKey) : null;
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Malformed state in localStorage'); // TODO: add toast
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    typeof window !== 'undefined' && window.localStorage.setItem(config.localstorageKey, serializedState);
  } catch {
    console.error(`Can't save to localStorage`); // TODO: add toast
  }
};
