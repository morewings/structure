/**
 * React hook converts completion to chart compatible format
 * @param {Number} completion
 * @return {Array.<{name: String, value: Number}>}
 */
export const useChartData = completion => {
  return [
    {
      name: 'Child nodes completed',
      value: completion,
    },
    {
      name: 'Child nodes non-completed',
      value: 100 - completion,
    },
  ];
};
