import React, { useEffect } from 'react';

type Props = {
  emptySlots: any[];
};
const EmptySlots: React.FC<Props> = ({ emptySlots }) => {
  useEffect(() => {
    console.log(emptySlots);
  }, [emptySlots]);
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
