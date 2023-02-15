import PropTypes from 'prop-types';

const Tag = ({ label, value, variant = 'blue' }) => {
  const variants = {
    blue: {
      'bg-light': 'bg-blue-100',
      'bg-dark': 'bg-blue-300',
      'text-light': 'text-blue-500',
      'text-dark': 'text-blue-800'
    },
    green: {
      'bg-light': 'bg-green-100',
      'bg-dark': 'bg-green-300',
      'text-light': 'text-green-500',
      'text-dark': 'text-green-800'
    },
    red: {
      'bg-light': 'bg-red-100',
      'bg-dark': 'bg-red-300',
      'text-light': 'text-red-500',
      'text-dark': 'text-red-800'
    }
  };

  const getVariant = (variantKey, property) => {
    if (typeof variants[variantKey] === 'undefined') {
      throw new Error(`Invalid Variant [${variantKey}]`);
    }

    if (typeof variants[variantKey][property] === 'undefined') {
      throw new Error(`Invalid Variant Property [${variantKey}][${property}]`);
    }

    return variants[variantKey][property];
  };

  return (
    <span className={`inline-flex items-center p-1 ${getVariant(variant, 'bg-light')} rounded-[3px] text-xs leading-none whitespace-nowrap`}>
      <span className={`${getVariant(variant, 'bg-dark')} py-1 px-2 uppercase font-medium ${getVariant(variant, 'text-dark')} rounded-[2px]`}>{label}</span>
      <span className={`px-2 ${getVariant(variant, 'text-light')}`}>{value}</span>
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  variant: PropTypes.oneOf([
    'blue',
    'red',
    'green',
  ])
};

export default Tag;
