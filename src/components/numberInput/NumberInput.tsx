import React from 'react';

import chevron from '@/assets/images/chevronDownBlack.png';

type Props = {
  className?: string;
  label: string;
  placeholder: string;
  name: string;
  suffix?: string;
  error?: string | boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const NumberInput: React.FC<Props> = ({
  label,
  name,
  placeholder,
  className,
  suffix,
  error,
  ...props
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
          className={`input ${error ? 'error' : ''}`}
          type="number"
          placeholder={placeholder}
          name={name}
          {...props}
        />
        {suffix && <p className="input__suffix">{suffix}</p>}
        <div className="input__btns">
          <img src={chevron} className="input__increase" alt="Mais" />
          <img src={chevron} className="input__decrease" alt="Menos" />
        </div>
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default NumberInput;
