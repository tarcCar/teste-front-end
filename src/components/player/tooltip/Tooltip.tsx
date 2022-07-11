import React, { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  toolTipContent: React.ReactNode;
};

const Tooltip: React.FC<Props> = ({ children, toolTipContent }) => {
  const [showToolTip, setShowToolTip] = useState<boolean>();

  const playerShowTooltip = () => {
    const interval = setInterval(() => {
      setShowToolTip((current) => !current);
    }, 2000);
    return interval;
  };

  useEffect(() => {
    const interval = playerShowTooltip();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="tooltip">
      {children}
      <span className={`tooltiptext ${showToolTip ? 'visible' : ''}`}>
        {toolTipContent}
      </span>
    </div>
  );
};

export default Tooltip;
