import { Position } from "reactflow";
import { CustomButton } from "../components/customButton";
import { BaseNode } from "./node";
import { useMemo } from "react";

export const StartNode = (props) => {
  const {
    id,
    data: { color },
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
    <BaseNode title="Start" handler={handlerConfig}>
      <CustomButton title="Begin Workflow" color={color} />
    </BaseNode>
  );
};
