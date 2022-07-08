import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Logo, Button } from '@/components';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const onEnterButtonClickHandler = (): void => {
    navigate('/map');
  };
  return (
    <div className="home">
      <div className="home-container">
        <Logo />
        <Button text="Entrar" onClick={onEnterButtonClickHandler} />
      </div>
    </div>
  );
};

export default Home;
