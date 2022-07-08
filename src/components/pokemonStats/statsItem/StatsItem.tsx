import React from 'react';

type Props = {
  label: string;
  value: string;
};

const StatsItem: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="stats-item">
      <p className="stats-item-label">{label}</p>
      <p className="stats-item-value">{value}</p>
    </div>
  );
};

export default StatsItem;
