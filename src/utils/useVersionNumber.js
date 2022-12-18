import {useEffect} from 'react';

import pkg from '../../package.json';

export const useVersionNumber = () => {
  useEffect(() => {
    console.log('Structure version: ', pkg.version);
  }, []);
};
