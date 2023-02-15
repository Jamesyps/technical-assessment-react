/**
 * Format options into label/value format for input controls
 *
 * @param {Array} options
 * @returns {Array}
 */
export const formatOptions = (options) => {
  return options.map((option) => ({ label: option, value: option }));
}

/**
 * Safely return an array from CSV searchParams.
 *
 * @param {String} value
 * @returns {Array}
 */
export const optionValueToArray = (value) => {
  return value ? value.split(',') : [];
}
