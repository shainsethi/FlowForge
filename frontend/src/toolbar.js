// toolbar.js
import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-4">
      <div className="mt-5 flex flex-wrap gap-3">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode
          type="link"
          label="Link"
          href="https://vectorshift.ai/"
          linkText="vectorshift"
          title="My new link"
        />
        <DraggableNode type="fileUpload" label="Upload" />
        <DraggableNode type="start" label="Start" color="green" />
        <DraggableNode type="result" label="Result" result="Success 🟢" />
        <DraggableNode type="email" label="Email" email="test@gmail.com" />
      </div>
    </div>
  );
};
