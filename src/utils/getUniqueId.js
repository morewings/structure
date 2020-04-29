import {nanoid} from 'nanoid';

const getUniqueId = ({prefix = 'node', length = 6} = {}) =>
  `${prefix}_${nanoid(length)}`;

export default getUniqueId;
