import React from 'react';

type Props = {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};
const Button: React.FC<Props> = ({ icon, text, onClick, disabled, type }) => {
  return (
    <button
      type={type}
      className={`btn btn--${text ? 'text' : 'icon'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text ?? icon}
    </button>
  );
};

export default Button;
