import { Position } from "reactflow";
import { BaseNode } from "./node";
import { FileUpload } from "../components/fileUpload";
import { useMemo } from "react";

export const FileUploadNode = (props) => {
  const { id } = props;

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
    <BaseNode title="File Upload" handler={handlerConfig}>
      <FileUpload onFileSelect={(file) => console.log(file)} />
    </BaseNode>
  );
};
