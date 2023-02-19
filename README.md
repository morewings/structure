# Structure

## Definition

**Structure** is a tool to view and edit tree-like graph data object.

## Development

```shell script
yarn start # starts dev mode
yarn edit:fonts # opens icon font edit tool
```

Design assets are located at [Google Drive](https://drive.google.com/open?id=1d373Aux91lg9t5Xefgj5E-W6LNbblATQ)

## Feature description

### Structure

Includes a hierarchy of **Nodes** inside Record-like collection.

**Node** - entity which contains specific fields

```js
const node = {
  title: 'Initial Node', // node title
  isDone: false, // Boolean value
  children: [], // list of node ids
  parentId: 'parentId', // id of parent
  generation: 0, // number of generation
  color: 'red', // name of color
  id: 'id' // id of node
}
```

### Modal

Contains Map like collection of **Modals**.

Modal is a React component.

### Accordion

Contains Map like collection of accordion states. Each state related to the Node with same id.

```js
const accordion = {
  openNode: 'node_id'
}
```


## Guides

### How to add new modal

Create modal content component (`<ModalContent />`).

Add new modal type to `src/components/ModalManager/modalTypes.js`
```js
export default Object.freeze({
  // ...
  NEW_MODAL_NAME: 'NEW_MODAL_NAME',
  // ...
});
```

Describe connection between type and component in `src/components/ModalManager/useModalComponent.js`

```js
import ModalContent from '@/components/ModalContent';
import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    // ...
    [modalTypes.NEW_MODAL_NAME]: ModalContent,
    // ...
  }[modalType]);

// ...
```

Create action hook in `src/components/ModalManager/` folder.

```js
import {useModalActions} from '@/features/modal';
import modalTypes from './modalTypes';

const useModalComponent = () => {
  const {openModal} = useModalActions();
  // we can pass props to ModalContent here, see `modalProps`. Props should be serializable since they are stored in redux.
  return modalProps => {
    openModal({
      modalType: modalTypes.NEW_MODAL_NAME,
      modalProps: modalProps,
    });
  };
};
```


Use it like this:

```jsx
import {useModalComponent} from '@/components/ModalManager';

const Component = () => {
  //...
  const showModal = useModalComponent();
  // ...
  return <div onClick={showModal} />
}
```

### Add new `Toast`

Add new `Toast` type to `@/components/ToastManager/toastTypes.js`
```js
export default Object.freeze({
  // ...
  NEW_TOAST_NAME: 'NEW_TOAST_NAME',
  // ...
});
```

Create `Toast` UI component.

Describe connection between type and new component in `src/components/ToastManager/useToastComponent.js`

```js
import ToastContent from '@/components/ToastContent';
import toastTypes from './toastTypes';

const useToastComponent = toastType =>
  ({
    // ...
    [toastTypes.NEW_TOAST_NAME]: ToastContent,
    // ...
  }[toastType]);
// ...
```

Create state action hook in the new `Toast` component folder.

```js
import {useCallback} from 'react';

import {useToastActions} from '@/features/toast';
import {toastTypes} from '@/components/ToastManager';

export const useToast = () => {
  const {openToast} = useToastActions();
  return useCallback(
    ({text}) => {
      openToast({
        toastType: toastTypes.NEW_TOAST_NAME,
        toastProps: {
          text,
        },
      });
    },
    [openToast]
  );
};
```

Use it like this:

```jsx
import {useToastComponent} from '@/components/ToastComponent';

const Component = () => {
  //...
  const showToast = useToastComponent();
  // ...
  return <button onClick={showToast} />
}
```
