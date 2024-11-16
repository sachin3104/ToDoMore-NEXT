"use client";

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <>
      <ul className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border border-gray-300 rounded-md hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                className="form-checkbox h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300 rounded"
              />
              <span
                className={`text-lg ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {task.title}
              </span>
            </div>
            <button
              className="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
