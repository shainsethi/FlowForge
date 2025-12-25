import { useMemo } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./node";

export const EmailNode = (props) => {
  const {
    id,
    data: { email },
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
      title="Email"
      content={`This is Email : ${email}`}
      handler={handlerConfig}
    >
    </BaseNode>
  );
};
