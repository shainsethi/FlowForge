import { Position } from "reactflow";
import { BaseNode } from "./node";
import { useMemo } from "react";

export const ResultNode = (props) => {
  const {
    id,
    data: { result },
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
    <BaseNode
      title="Result"
      content={`This is Result : ${result}`}
      handler={handlerConfig}
    />
  );
};
