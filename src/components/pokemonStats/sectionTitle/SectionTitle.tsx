import React from 'react';

type Props = {
  title: string;
};
const SectionTitle: React.FC<Props> = ({ title }) => {
  return <hr data-content={title} className="section-title" />;
};

export default SectionTitle;
