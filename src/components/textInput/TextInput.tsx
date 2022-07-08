import React from 'react';

type Props = {
  className?: string;
  label: string;
  placeholder: string;
  name: string;
};

const TextInput: React.FC<Props> = ({
  className,
  label,
  name,
  placeholder,
}) => {
  return (
    <div className={`${className} input__container`}>
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        className="input"
        type="text"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TextInput;
