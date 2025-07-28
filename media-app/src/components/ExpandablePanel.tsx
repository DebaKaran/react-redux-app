import React from "react";

interface ExpandablePanelProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const ExpandablePanel: React.FC<ExpandablePanelProps> = ({
  header,
  children,
}) => {
  return (
    <div className="mb-2 border rounded">
      <div className="flex justify-between p-2 items-center cursor-pointer">
        <div className="flex flex-row justify-between m-3 items-center">
          {header}
        </div>
      </div>
      <div className="p-2 border-t">{children}</div>
    </div>
  );
};

export default ExpandablePanel;
