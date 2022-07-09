import React from 'react';

type Props = {
  className?: string;
  label: string;
  placeholder: string;
  name: string;
  error?: string | boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput: React.FC<Props> = ({
  className = '',
  label,
  name,
  placeholder,
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
      <input
        id={name}
        className={`input ${error ? 'error' : ''}`}
        type="text"
        placeholder={placeholder}
        name={name}
        {...props}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default TextInput;
