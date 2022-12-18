import config from '@/config';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(config.localstorageKey);
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
    localStorage.setItem(config.localstorageKey, serializedState);
  } catch {
    console.error(`Can't save to localStorage`); // TODO: add toast
  }
};
