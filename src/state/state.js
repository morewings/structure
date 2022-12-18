import {combineReducers, createStore, compose} from 'redux';

import {StructureReducer} from '@/features/structure';
import {AccordionReducer} from '@/features/accordion';
import {ModalReducer} from '@/features/modal';
import {ToastReducer} from '@/features/toast';

const rootReducer = combineReducers({
  structure: StructureReducer,
  accordion: AccordionReducer,
  modal: ModalReducer,
  toast: ToastReducer,
});

let composeEnhancers;

if (
  typeof window !== 'undefined' &&
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  !!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const composedEnhancers = composeEnhancers();
export const store = createStore(rootReducer, {}, composedEnhancers);

// export default preloadedState =>
//   createStore(rootReducer, preloadedState, devtools);
