'use client';

import PropTypes from 'prop-types';

import {formatOptions, optionValueToArray} from '@/client/helpers';
import {useFilterSearchParams} from '@/client/hooks';
import CheckboxGroup from '@/components/CheckboxGroup';
import Select from '@/components/Select';

const Filters = ({ types, manufacturers, models, values }) => {
  const {appendParam, removeParam} = useFilterSearchParams();

  return (
    <div className="space-y-10">
      <Select
        name="type"
        label="Vehicle Type"
        options={formatOptions(types)}
        value={values?.type}
        onChange={(value) => {
          removeParam('page', false);
          value ? appendParam('type', value) : removeParam('type');
        }}
        allowBlank={true}
      />

      <Select
        name="manufacturer"
        label="Manufacturer"
        options={formatOptions(manufacturers)}
        value={values?.manufacturer}
        onChange={(value) => {
          removeParam('page', false);
          value ? appendParam('manufacturer', value) : removeParam('manufacturer');
        }}
        allowBlank={true}
      />

      <CheckboxGroup
        name="model"
        label="Models"
        value={optionValueToArray(values?.model)}
        options={formatOptions(models)}
        onChange={(value) => {
          removeParam('page', false);
          appendParam('model', value);
        }}
        searchable={true}
      />
    </div>
  );
};

Filters.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  manufacturers: PropTypes.arrayOf(PropTypes.string),
  models: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.shape({
    manufacturer: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    page: PropTypes.string,
  })
};

export default Filters;
