import {append, assoc, compose, lensProp, over, without, omit} from 'ramda';
import {MODAL_CLOSE} from './actionTypes';

const initialState = {
  open: ['modal_1'],
  modals: {
    modal_1: {
      modalProps: {},
      modalType: 'CONFIRMATION',
    },
  },
};

const openModalLens = lensProp(['open']);
const modalsLens = lensProp(['modals']);

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CLOSE: {
      const {id} = action;
      return compose(
        over(openModalLens, without([id])),
        over(modalsLens, omit([id]))
      )(state);
      // return compose(
      //   over(
      //     nodesListLens(),
      //     assoc(
      //       id,
      //       createNode({id, parentId, isDone, description, title, generation})
      //     )
      //   ),
      //   over(nodeChildrenLens(parentId), append(id))
      // )(state);
    }
    default:
      return state;
  }
};
