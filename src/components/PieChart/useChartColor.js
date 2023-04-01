import {useNodeColorValues} from '@/utils/nodeColors';

const normalizeColorName = color => {
  return color === '' ? 'gray' : color;
};

/**
 * Maps node's selected color name to color value
 * @param {string} colorName
 * @return {string}
 */
export const useChartColor = colorName => {
  const color = normalizeColorName(colorName);
  return useNodeColorValues(color);
};
