import {path} from 'ramda';

const getParentId = (structure, id) =>
  path(['nodes', id, 'parentId'], structure);

export default getParentId;
