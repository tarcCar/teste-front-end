import React from 'react';

import Button from '@/components/button/Button';

type Props = {
  onClick: () => void;
};

const FreeButton: React.FC<Props> = ({ onClick }) => {
  return <Button text="LIBERAR POKEMON" onClick={onClick} />;
};

export default FreeButton;
