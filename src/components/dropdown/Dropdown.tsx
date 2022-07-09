import React, { useState } from 'react';

import chevron from '@/assets/images/chevronDownBlack.png';

type Option = {
  text: string;
  value: any;
};

type Props = {
  placeholder: string;
  options: Option[];
  multiple?: boolean;
  limit?: number;
  onSelectedOption: (value: any[]) => void;
  onLimitReach?: () => void;
};

const Dropdown: React.FC<Props> = ({
  options,
  placeholder,
  multiple,
  onSelectedOption,
  limit,
  onLimitReach,
}) => {
  const [values, setValues] = useState<any[]>([]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selected = Array.from(e.target.selectedOptions).map(
      ({ value }) => value
    );

    if (!limit || selected.length <= limit) {
      setValues(selected);
      onSelectedOption(selected);
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
        className="dropdown"
        onChange={onChangeHandler}
        multiple={multiple}
        value={values}
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
    </div>
  );
};

export default Dropdown;
