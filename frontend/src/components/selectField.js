export const SelectField = ({ value, onChange, options, label }) => {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
      {label}
      <select
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
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
