import { Logo } from '@/components';
import React from 'react';
import './home-styles.scss'
const Home: React.FC = () => {
  return <div className='home-container'>
    <Logo />
  </div>;
}

export default Home;
