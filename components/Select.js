'use client';

import PropTypes from 'prop-types';
import {useId, useState} from 'react';

const Select = ({ name, label, options, value, onChange, allowBlank = false }) => {
  const labelFor = useId();
  const [selected, setSelected] = useState(value);

  const onChangeHandler = (value) => {
    if (onChange) {
      onChange(value || null);
    }

    setSelected(value || null);
  };

  return (
    <div>
      <label htmlFor={labelFor} className="block mb-2 font-bold">{label}</label>
      <select id={labelFor} name={name} value={selected} onChange={(event) => onChangeHandler(event.target.value)} className="w-full rounded">
        {allowBlank && (
          <option value="">
            Select...
          </option>
        )}
        {options.map((option) => (
          <option key={[name, option.value]} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
    })
  ),
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  onChange: PropTypes.func,
  allowBlank: PropTypes.bool,
};

export default Select;
