import React, { type JSX } from "react";
import classNames from "classnames";
interface SkeletonProps {
  times: number;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ times, className }) => {
  const outerClassNames = classNames(
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    "animate-pulse",
    className
  );

  const boxes: JSX.Element[] = [];

  for (let i = 0; i < times; i++) {
    boxes.push(<div key={i} className={outerClassNames} />);
  }

  return boxes;
};

export default Skeleton;
