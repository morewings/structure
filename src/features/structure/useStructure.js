import {useSelector} from 'react-redux';

export const useStructure = () => useSelector(state => state.structure);
