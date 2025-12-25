// submit.js
import { useReactFlow } from "reactflow";

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";
    try {
      const res = await fetch(`${apiUrl}/pipelines/parse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nodes: getNodes(),
          edges: getEdges(),
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      alert(`Nodes: ${data.num_nodes}
            Edges: ${data.num_edges}
            Is DAG: ${data.is_dag}`);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Error submitting pipeline. Please check if the backend is running.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleSubmit}
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
};
