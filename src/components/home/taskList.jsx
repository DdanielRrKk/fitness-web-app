import React from 'react';

function TaskItem({ title, dueDate, isChecked }) {
  return (
    <div className="flex items-center py-2 px-4 border-b border-gray-300">
      <input type="checkbox" checked={isChecked} className="mr-2" />
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500 text-sm">{dueDate}</p>
      </div>
    </div>
  );
}

function TaskList({ tasks = [] }) {
    if(tasks.length === 0) {
        return (
            <p>No tasks !</p>
        );
    }
    return (
        <div className="bg-white rounded shadow">
            {tasks.map((task, index) => (
                <div key={index} className="flex items-center py-2 px-4 border-b border-gray-300">
                    <input type="checkbox" checked={task.IsChecked} className="mr-2" />
                    <div className="flex-1">
                        <p className="font-semibold">{task.Title}</p>
                        <p className="text-gray-500 text-sm">{task.DueDate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
