import {useSelector} from 'react-redux';
import {getChildrenIdList} from './operations';

const useChildrenIdList = id => {
  const structure = useSelector(state => state.structure);
  return getChildrenIdList(structure, id)
};

export default useChildrenIdList;
