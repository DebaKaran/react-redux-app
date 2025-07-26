import React, { type JSX } from "react";
import classNames from "classnames";
interface SkeletonProps {
  times: number;
  className: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ times, className }) => {
  // const outerClassNames = classNames(
  //   "relative",
  //   "overflow-hidden",
  //   "bg-gray-200",
  //   "rounded",
  //   "mb-2.5"
  // );

  // const innerClassNames = classNames(
  //   "animate-shimmer",
  //   "absolute",
  //   "inset-0",
  //   "-translate-x-full",
  //   "bg-gradient-to-r",
  //   "from-gray-200",
  //   "via-white",
  //   "to-gray-200"
  // );
  // const boxes: JSX.Element[] = [];

  // for (let i = 0; i < times; i++) {
  //   boxes.push(
  //     <div key={i} className={outerClassNames}>
  //       <div className={innerClassNames} />
  //     </div>
  //   );
  // }
  // return boxes;
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
