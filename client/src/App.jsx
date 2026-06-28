import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import api from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <TaskForm
          fetchTasks={fetchTasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />
        <TaskList
          tasks={tasks}
          fetchTasks={fetchTasks}
          setEditTask={setEditTask}
        />
      </div>
    </>
  );
}

export default App;