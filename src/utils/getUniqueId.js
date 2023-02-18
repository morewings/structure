import {nanoid} from 'nanoid';

export const getUniqueId = ({prefix = 'node', length = 6} = {}) => `${prefix}_${nanoid(length)}`;
