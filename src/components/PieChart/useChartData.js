/**
 * React hook converts completion to chart compatible format
 * @param {Number} completion
 * @return {Array.<{name: String, value: Number}>}
 */
export const useChartData = completion => {
  return [
    {
      name: 'Completed',
      value: completion,
    },
    {
      name: 'Non-completed',
      value: 100 - completion,
    },
  ];
};
