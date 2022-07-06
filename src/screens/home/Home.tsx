import { Logo, Button } from '@/components';
import React from 'react';
const Home: React.FC = () => {
  const onEnterButtonClickHandler = (): void => {
    console.log('click');
  }
  return <div className='home'>
    <div className='home-container'>
      <Logo />
      <Button text='Entrar' onClick={onEnterButtonClickHandler} />
    </div>
  </div>;
}

export default Home;
