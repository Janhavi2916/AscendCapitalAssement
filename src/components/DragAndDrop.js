import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const TaskItem = ({ id, text, index, moveTask }) => {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ border: '1px solid black', marginBottom: '4px' }}>
      {text}
    </div>
  );
};

const DragAndDrop = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    // Add more tasks dynamically
  ]);

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [removed] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, removed);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Drag and Drop</h2>
      <div>
        {tasks.map((task, index) => (
          <TaskItem key={task.id} id={task.id} text={task.text} index={index} moveTask={moveTask} />
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
