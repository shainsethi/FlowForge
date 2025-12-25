export const InputField = ({ value, onChange, type = "text", label }) => {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="
          border 
          border-gray-300 
          p-2 
          rounded-lg 
          focus:ring-2 
          focus:ring-blue-500 
          outline-none
        "
      />
    </label>
  );
};
