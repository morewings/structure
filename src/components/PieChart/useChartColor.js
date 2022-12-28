import {useNodeColorValues} from '@/utils/nodeColors';

const normalizeColorName = color => {
  return color === '' ? 'gray' : color;
};

export const useChartColor = colorName => {
  const color = normalizeColorName(colorName);
  return useNodeColorValues(color);
};
