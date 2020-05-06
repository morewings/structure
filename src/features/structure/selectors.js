import {useSelector} from 'react-redux';

const getParent = (structure, id) => structure.nodes[id].parentId;

export const useBoardContent = () => {
  const structure = useSelector(state => state.structure);
  const childrenId = structure.focused;
  const siblingsId = getParent(structure, childrenId);
  const parentId = getParent(structure, siblingsId);

  return {
    childrenId,
    siblingsId,
    parentId,
  };
};

export const useDescendants = (id) => {

};