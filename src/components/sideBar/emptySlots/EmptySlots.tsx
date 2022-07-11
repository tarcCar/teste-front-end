import React from 'react';

type Props = {
  emptySlots: any[];
};
const EmptySlots: React.FC<Props> = ({ emptySlots }) => {
  return (
    <>
      {emptySlots.map((emptySlot) => (
        <div key={emptySlot} className="sidebar__item">
          ?
        </div>
      ))}
    </>
  );
};

export default EmptySlots;
