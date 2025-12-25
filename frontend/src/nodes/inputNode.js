// inputNode.js

import { useCallback, useMemo, useState } from "react";
import { Position } from "reactflow";
import { InputField } from "../components/inputField";
import { SelectField } from "../components/selectField";
import { BaseNode } from "./node";

export const InputNode = ({ data, id }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    setInputType(e.target.value);
  }, []);

  const handlerConfig = useMemo(
    () => [
      {
        type: "source",
        position: Position.Right,
        id: `${id}-value`,
      },
    ],
    []
  );

  return (
    <BaseNode title="Input" handler={handlerConfig}>
      <InputField
        label="Name:"
        type="text"
        value={currName}
        onChange={handleNameChange}
      />
      <SelectField
        label="Type:"
        value={inputType}
        onChange={handleTypeChange}
        options={[
          { value: "Text", label: "Text" },
          { value: "File", label: "Image" },
        ]}
      />
    </BaseNode>
  );
};
