// llmNode.js

import { Position } from "reactflow";
import { BaseNode } from "./node";
import { useMemo } from "react";

export const LLMNode = ({ id }) => {
  const handlerConfig = useMemo(
    () => [
      {
        type: "target",
        position: Position.Left,
        id: `${id}-system`,
        style: { top: `${100 / 3}%` },
      },
      {
        type: "target",
        position: Position.Left,
        id: `${id}-prompt`,
        style: { top: `${200 / 3}%` },
      },
      {
        type: "source",
        position: Position.Right,
        id: `${id}-response`,
      },
    ],
    []
  );

  return (
    <BaseNode
      title="LLM"
      content={"This is a LLM."}
      handler={handlerConfig}
    />
  );
};
