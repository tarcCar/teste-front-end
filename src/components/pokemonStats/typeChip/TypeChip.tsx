import React from 'react';

type Props = {
  type: string;
};

const TypeChip: React.FC<Props> = ({ type }) => {
  return <span className={`type--${type} type-chip`}>{type}</span>;
};

export default TypeChip;
