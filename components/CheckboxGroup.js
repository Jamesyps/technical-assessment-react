'use client';

import PropTypes from 'prop-types';
import {useCallback, useId, useMemo, useState} from 'react';

const CheckboxGroup = ({ name, label, options, value = [], onChange, searchable = false }) => {
  const [checked, setChecked] = useState(value);
  const [term, setTerm] = useState('');
  const searchId = useId();

  const isChecked = useCallback((optVal) => checked.includes(optVal), [checked]);

  const processedOptions = useMemo(() => {
    return options
      .filter((option) => {
        // do not hide checked items, and limit text inconsistencies from end-user.
        return isChecked(option.value) || option.value.toLowerCase().startsWith(term.toLowerCase());
      });
  }, [options, term, isChecked]);

  const onChangeHandler = (changeVal) => {
    const newValue = isChecked(changeVal) ? checked.filter((checkedVal) => checkedVal !== changeVal) : [...checked, changeVal];

    if (onChange) {
      onChange(newValue);
    }

    setChecked(newValue);
  };

  return (
    <div>
      <strong className="block mb-3">{label}</strong>

      {searchable && (
        <div className="mb-3">
          <label htmlFor={searchId} className="sr-only">Search {label}</label>
          <input
            type="search"
            id={searchId}
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            className="w-full rounded"
            placeholder={`Search ${label}...`}
          />
        </div>
      )}

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {processedOptions.map((option) => (
          <li key={[name, option.value]}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value={option.value}
                className="w-5 h-5 text-green-600"
                onChange={(event) => onChangeHandler(event.target.value)}
                checked={isChecked(option.value)}
              />
              <span className="ml-2 text-sm leading-none">{option.label}</span>
            </label>
          </li>
        ))}
      </ul>

    </div>
  );
};

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
    })
  ),
  value: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
  onChange: PropTypes.func,
  searchable: PropTypes.bool,
};

export default CheckboxGroup;
