import {useSelector} from 'react-redux';
import {getParentId} from './selectors';

const useBoardContent = () => {
  const structure = useSelector(state => state.structure);
  // TODO: add better names (focusedID);
  const childrenId = structure.focused;
  const siblingsId = getParentId(structure, childrenId);
  const parentId = getParentId(structure, siblingsId);

  return {
    childrenId,
    siblingsId,
    parentId,
  };
};

export default useBoardContent;
