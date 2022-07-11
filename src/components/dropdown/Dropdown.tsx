import React, { useEffect, useState } from 'react';

import chevron from '@/assets/images/chevronDownBlack.png';

type Option = {
  text: string;
  value: any;
};

type Props = {
  placeholder: string;
  name?: string;
  options: Option[];
  multiple?: boolean;
  limit?: number;
  onSelectedOption?: (value: any[]) => void;
  onLimitReach?: () => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  error?: string | boolean;
  selectedValues: any[];
};

const Dropdown: React.FC<Props> = ({
  options,
  placeholder,
  multiple,
  onSelectedOption,
  limit,
  onLimitReach,
  onChange,
  onBlur,
  name,
  error,
  selectedValues,
}) => {
  const [values, setValues] = useState<any[]>([]);
  useEffect(() => {
    setValues(selectedValues);
  }, [selectedValues]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
    e.preventDefault();
    const selected = Array.from(e.target.selectedOptions).map(
      ({ value }) => value
    );

    if (!limit || selected.length <= limit) {
      setValues(selected);
      if (onSelectedOption) {
        onSelectedOption(selected);
      }
      return;
    }
    if (onLimitReach) {
      onLimitReach();
    }
  };

  return (
    <div className="dropdown__container">
      <img src={chevron} className="dropdown__icon" alt="Chevron" />
      <select
        id={name}
        name={name}
        className={`dropdown ${error ? 'error' : ''}`}
        onChange={onChangeHandler}
        multiple={multiple}
        value={values}
        onBlur={onBlur}
      >
        <option className="dropdown__option" selected>
          {placeholder}
        </option>
        {options &&
          options.map((option) => (
            <option
              className="dropdown__option"
              value={option.value}
              key={option.text}
            >
              {option.text}
            </option>
          ))}
      </select>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Dropdown;
