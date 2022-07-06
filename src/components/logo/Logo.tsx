import React from 'react';
import logo from '@/assets/images/pokemonLogo.png'
import './logo-styles.scss';
const Logo: React.FC = () => {
  return <img src={logo} className="logo" alt="logo" />;
}

export default Logo;
