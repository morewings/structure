import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import StructureReducer from '../features/structure/Reducer';

const rootReducer = combineReducers({
  structure: StructureReducer,
});

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
  );
