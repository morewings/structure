# Structure

## Definition

**Structure** is a tool to view and edit tree-like graph data object.

## Development

```shell script
yarn start # starts dev mode 
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

Describe connection between type and component in `src/components/ModalManager/useModalComponent.js

```js
import ModalContent from 'src/components/ModalContent';
import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    // ...
    [modalTypes.NEW_MODAL_NAME]: ModalContent,
    // ...
  }[modalType]);

// ...
````

Create action hook in `src/components/ModalManager/` folder.

```js
import {useModalActions} from 'src/features/modal';
import modalTypes from './modalTypes';

const useModalComponent = () => {
  const {openModal} = useModalActions();
  // we can pass props to ModalContent here, see `modalProps`
  return modalProps => {
    openModal({
      modalType: modalTypes.NEW_MODAL_NAME,
      modalProps: modalProps,
    });
  };
};
```

Use it like this:
```jsx harmony
import {useModalComponent} from 'src/components/ModalManager';

const Component = () => {
  //...
  const showModal = useModalComponent();
  // ...
  return <div onClick={showModal} />
}
```
