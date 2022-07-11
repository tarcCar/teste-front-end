import React, { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  toolTipContent: React.ReactNode;
  onHide?: () => void;
};

const Tooltip: React.FC<Props> = ({ children, toolTipContent, onHide }) => {
  const [showToolTip, setShowToolTip] = useState<boolean>();

  const playerShowTooltip = () => {
    const interval = setInterval(() => {
      setShowToolTip((current) => {
        const newShowTooltip = !current;
        if (!newShowTooltip && onHide) {
          onHide();
        }
        return newShowTooltip;
      });
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
