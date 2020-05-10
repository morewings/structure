const key = 'structure';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(key);
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
    localStorage.setItem(key, serializedState);
  } catch {
    console.error("Can't save to localStorage"); // TODO: add toast
  }
};
