import {combineReducers, createStore} from 'redux';
import {StructureReducer} from 'src/features/structure';
import {AccordionReducer} from 'src/features/accordion';
import {ModalReducer} from 'src/features/modal';

const rootReducer = combineReducers({
  structure: StructureReducer,
  accordion: AccordionReducer,
  modal: ModalReducer,
});

const windowGlobal = typeof window !== 'undefined' && window;

const devtools =
  process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
    : f => f;

export default preloadedState =>
  createStore(rootReducer, preloadedState, devtools);
