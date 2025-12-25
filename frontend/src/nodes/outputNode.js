// outputNode.js

import { useCallback, useMemo, useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./node";
import { InputField } from "../components/inputField";
import { SelectField } from "../components/selectField";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    setOutputType(e.target.value);
  }, []);

  const handlerConfig = useMemo(
    () => [
      {
        type: "target",
        position: Position.Left,
        id: `${id}-value`,
      },
    ],
    []
  );

  return (
    <BaseNode title={"Output"} handler={handlerConfig}>
      <div>
        <InputField
          label="Name:"
          type="text"
          value={currName}
          onChange={handleNameChange}
        />
        <SelectField
          label="Type:"
          value={outputType}
          onChange={handleTypeChange}
          options={[
            { value: "Text", label: "Text" },
            { value: "File", label: "Image" },
          ]}
        />
      </div>
    </BaseNode>
  );
};
