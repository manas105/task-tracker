import api from "../services/api";

function TaskCard({ task, fetchTasks, setEditTask }) {

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this task?");

    if (!confirmDelete) return;

    try {
      await api.delete(`/tasks/${task._id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
      alert("Failed to delete task");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 border">

      <h3 className="text-xl font-bold text-gray-800">
        {task.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          {task.priority}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.status}
        </span>
      </div>

      {task.dueDate && (
        <p className="text-sm text-gray-500 mt-3">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => setEditTask(task)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TaskCard;