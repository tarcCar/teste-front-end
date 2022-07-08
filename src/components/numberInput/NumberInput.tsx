import React from 'react';

import chevron from '@/assets/images/chevronDownBlack.png';

type Props = {
  className?: string;
  label: string;
  placeholder: string;
  name: string;
  suffix?: string;
};
const NumberInput: React.FC<Props> = ({
  label,
  name,
  placeholder,
  className,
  suffix,
}) => {
  return (
    <div className={`${className} input__container`}>
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="input__number">
        <input
          id={name}
          className="input"
          type="number"
          placeholder={placeholder}
          name={name}
        />
        {suffix && <p className="input__suffix">{suffix}</p>}
        <div className="input__btns">
          <img src={chevron} className="input__increase" alt="Mais" />
          <img src={chevron} className="input__decrease" alt="Menos" />
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
