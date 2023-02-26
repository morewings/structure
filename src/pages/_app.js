import {Provider as ReduxProvider} from 'react-redux';

import {ThemeProvider} from '@/ui/ThemeProvider';
import {store} from '@/state';

import '@/components/Layout/global.css';
import '@/ui/Icon/icons.css';

const MyApp = ({Component, pageProps}) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default MyApp;
