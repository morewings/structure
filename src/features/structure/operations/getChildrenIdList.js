import {path} from 'ramda';

const getChildrenIdList = (structure, nodeId) => path(['nodes', nodeId, 'children'], structure);

export default getChildrenIdList;
