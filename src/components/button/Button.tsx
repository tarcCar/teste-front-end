import React from 'react';
type Props = {
  text?: string
  icon?: string
  onClick: () => void
}
const Button: React.FC<Props> = ({ icon, text, onClick }) => {
  return <button className={`btn btn--${text ? 'text' : 'icon'}`} onClick={onClick}>
  {text ?? icon}
</button>;
}

export default Button;
