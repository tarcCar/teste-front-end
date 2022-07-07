import React from 'react';
type Props = {
  text?: string
  icon?: React.ReactNode
  onClick: () => void
}
const Button: React.FC<Props> = ({ icon, text, onClick }) => {
  return <button className={`btn btn--${text ? 'text' : 'icon'}`} onClick={onClick}>
  {text ?? icon}
</button>;
}

export default Button;
