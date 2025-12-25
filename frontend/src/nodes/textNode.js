// textNode.js

import { useCallback, useMemo, useState, useRef, useEffect } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./node";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const textareaRef = useRef(null);

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    autoResize();
  }, []);

  const handleTextChange = useCallback((e) => {
    setCurrText(e.target.value);
    autoResize();
  }, []);

  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    return [...new Set([...currText.matchAll(regex)].map((m) => m[1]))];
  }, [currText]);

  const variableHandles = useMemo(() => {
    return variables.map((v, i) => ({
      id: `var-${v}`,
      type: "target",
      position: Position.Left,
      style: { top: 40 + i * 20 },
    }));
  }, [variables]);

  return (
    <BaseNode
      title="Text"
      handler={[
        ...variableHandles,
        { 
          id: `${id}-output`,
          type: "source",
          position: Position.Right,
        },
      ]}
    >
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        wrap="soft"
        className="
        w-full 
        border border-gray-300 
        rounded-lg 
        p-3 
        text-sm 
        resize-none 
        focus:ring-2 focus:ring-blue-500 
        outline-none
        leading-5
        overflow-hidden
        whitespace-pre-wrap
      "
        placeholder="Enter text... (use {{variables}})"
      />
    </BaseNode>
  );
};
