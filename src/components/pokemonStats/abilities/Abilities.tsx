import React from 'react';

type Props = {
  abilities: string[];
};

const Abilities: React.FC<Props> = ({ abilities }) => {
  return <div className="abilities">{abilities.join()}</div>;
};

export default Abilities;
