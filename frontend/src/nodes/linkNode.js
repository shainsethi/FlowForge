// inputNode.js

import { useMemo } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./node";

export const LinkNode = (props) => {
  const {
    data: { linkText, href, title },
    id,
  } = props;

  const handlerConfig = useMemo(
    () => [
      {
        type: "source",
        position: Position.Right,
        id: `${id}-value`,
      },
      {
        type: "target",
        position: Position.Left,
        id: `${id}-output`,
      },
    ],
    []
  );

  return (
    <BaseNode title={title} handler={handlerConfig}>
      <div className="flex">
        <a href={href} target="__blank" className="text-blue-700">
          {linkText}
        </a>
      </div>
    </BaseNode>
  );
};
