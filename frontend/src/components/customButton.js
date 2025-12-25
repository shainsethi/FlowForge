export const CustomButton = ({ title, color }) => {
  return (
    <button
      type="button"
      className={`px-5 py-2 rounded-md text-white shadow-md hover:opacity-90 transition`}
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
};
