// import {Provider} from 'react-redux';

import {ThemeProvider} from '@/ui/ThemeProvider';
import {Provider} from '@/state/Provider';

import '@/components/Layout/global.css';
import '@/ui/Icon/icons.css';
import '@/ui/ThemeProvider/rootTheme.css';

const MyApp = ({Component, pageProps}) => {
  return (
    <Provider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
