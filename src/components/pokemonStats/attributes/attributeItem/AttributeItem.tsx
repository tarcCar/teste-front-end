import React from 'react';

type Props = {
  icon: string;
  label: string;
  value: number;
};

const AttributeItem: React.FC<Props> = ({ icon, label, value }) => {
  return (
    <div className="attribute-item">
      <img src={icon} alt={label} className="attribute-icon" />
      <span className="attribute-label">{label}</span>
      <span className="attribute-value">{value}</span>
    </div>
  );
};

export default AttributeItem;
