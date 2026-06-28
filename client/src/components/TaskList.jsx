import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-500">
        No Tasks Yet
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Your Tasks
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
            setEditTask={setEditTask}   // ← Missing in your code
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;