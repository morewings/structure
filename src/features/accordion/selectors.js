import {useSelector} from 'react-redux';

export const useAccordionState = id => useSelector(state => state.accordion[id]);
