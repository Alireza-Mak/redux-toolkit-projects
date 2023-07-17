import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface ExpandablePanelProps {
  header: React.ReactNode;
  children: React.ReactNode;
}
const ExpandablePanel: React.FC<ExpandablePanelProps> = ({
  header,
  children,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="mb-2 border rounded overflow-hidden">
      <div className="flex p-2 justify-between items-center bg-gray-300">
        <div className="flex justify-between items-center">{header}</div>
        <div onClick={handleClick} className="cursor-pointer text-xl">
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{expanded && children}</div>}
    </div>
  );
};

export default ExpandablePanel;
