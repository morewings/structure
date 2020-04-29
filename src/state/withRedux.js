/*eslint-disable*/
import React from 'react';
import {Provider} from 'react-redux';
import createStore from './createStore';

/**
 * Utility Higher Order Component factory. Returns HOC which takes another
 * Component and wraps it with given Provider.
 */
// const withRedux = WrappedComponent => props => {
//   const store = createStore();
//   return (
//     <Provider store={store}>
//       <WrappedComponent {...props} />
//     </Provider>
//   );
// };

export default ({element}) => (
  <Provider store={createStore()}>{element}</Provider>
);

// export default withRedux;
