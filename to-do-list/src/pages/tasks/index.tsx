"use client";

import Form from "@/components/Form";
import TaskItem, { TaskItemProps } from "@/components/TaskItem";
import { useState } from "react";
import { TasksContext, TasksContextProps } from "./context";

export interface FormDataProps {
  taskName: string;
  id?: string;
}

const Tasks = () => {
  const [formData, setFormData] = useState<FormDataProps>({ taskName: "" });
  const [tasksList, setTasksList] = useState<TaskItemProps[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data: TaskItemProps = {
      id: formData.id || Math.random().toString(),
      name: formData.taskName,
    };

    if (formData.id) {
      const findedTask = tasksList.find((item) => item.id === data.id);
      const filteredTasks = tasksList.filter((item) => item.id !== data.id);

      if (findedTask) {
        findedTask.name = formData.taskName;
        setTasksList([...filteredTasks, ...[findedTask]]);
      }

      setFormData({ taskName: "" });
      return;
    }

    setTasksList([...tasksList, ...[data]]);
    setFormData({ taskName: "" });
  };

  const context: TasksContextProps = {
    formData,
    setFormData,
    tasksList,
    setTasksList,
    onSubmit: handleSubmit,
  };

  return (
    <TasksContext.Provider value={context}>
      <div className="flex flex-col justify-center items-center pt-4 min-h-screen bg-slate-950">
        <div className="w-2/4">
          <Form />
          <div className="w-full">
            {tasksList.map(({ ...props }) => (
              <TaskItem key={props.id} id={props.id} name={props.name} />
            ))}
          </div>
        </div>
      </div>
    </TasksContext.Provider>
  );
};

export default Tasks;
