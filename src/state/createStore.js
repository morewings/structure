import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {StructureReducer} from 'src/features/structure';
import {AccordionReducer} from 'src/features/accordion';

const rootReducer = combineReducers({
  structure: StructureReducer,
  accordion: AccordionReducer,
});

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
  );
