import React from 'react';

import chevron from '@/assets/images/chevronDownBlack.png';

type Option = {
  text: string;
  value: any;
};

type Props = {
  placeholder: string;
  options: Option[];
};

const Dropdown: React.FC<Props> = ({ options, placeholder }) => {
  return (
    <div className="dropdown__container">
      <img src={chevron} className="dropdown__icon" alt="Chevron" />
      <select className="dropdown">
        <option className="dropdown__option" value="">
          {placeholder}
        </option>
        {options &&
          options.map((option, index) => (
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
