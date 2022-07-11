import React from 'react';

type Props = {
  emptySlots: any[];
};
const EmptySlots: React.FC<Props> = ({ emptySlots }) => {
  return (
    <>
      {emptySlots.map(() => (
        <div className="sidebar__item">?</div>
      ))}
    </>
  );
};

export default EmptySlots;
