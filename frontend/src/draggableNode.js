export const DraggableNode = ({ type, label, ...data }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType: type, ...data })
    );
    event.dataTransfer.effectAllowed = "move";
    event.currentTarget.style.cursor = "grabbing";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={(e) => (e.currentTarget.style.cursor = "grab")}
      className="
        cursor-grab 
        select-none 
        px-4 py-2 
        rounded-lg 
        bg-gray-800 
        text-white 
        font-medium 
        w-28 
        flex items-center justify-center 
        shadow-sm 
        hover:bg-gray-700 
        transition-all
      "
    >
      {label}
    </div>
  );
};
