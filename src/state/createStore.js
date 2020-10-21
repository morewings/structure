import {combineReducers, createStore} from 'redux';
import {StructureReducer} from 'src/features/structure';
import {AccordionReducer} from 'src/features/accordion';
import {ModalReducer} from 'src/features/modal';

const rootReducer = combineReducers({
  structure: StructureReducer,
  accordion: AccordionReducer,
  modal: ModalReducer,
});

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
  );
