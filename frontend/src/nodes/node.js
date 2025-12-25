import React from "react";
import { Handle } from "reactflow";

const Handler = React.memo(({ handlers }) => (
  <>
    {handlers.map((field, idx) => (
      <Handle {...field} key={field.id + idx} />
    ))}
  </>
));

export const BaseNode = ({ title, content, handler, children }) => {
  return (
    <div
      className="
        relative
        w-52 
        min-h-[100px]
        border border-gray-400 
        rounded-md 
        bg-white 
        shadow-sm 
        p-3
      "
    >
      <div className="font-semibold text-gray-800 mb-1">{title}</div>
      <div className="text-sm text-gray-600">{content}</div>

      <Handler handlers={handler} />

      <div className="mt-2">{children}</div>
    </div>
  );
};



