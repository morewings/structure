import {useSelector} from 'react-redux';

const useNodeData = id => useSelector(state => state.structure.nodes[id]);

export default useNodeData;
