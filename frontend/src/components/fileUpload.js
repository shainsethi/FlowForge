export const FileUpload = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) onFileSelect(file);
  };

  return (
    <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
      Upload File:
      <input
        type="file"
        onChange={handleFileChange}
        className="
          border 
          border-gray-300 
          bg-gray-50
          p-2 
          rounded-lg 
          cursor-pointer 
          text-sm
        "
      />
    </div>
  );
};
