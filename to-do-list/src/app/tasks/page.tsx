"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/config/api";
import Form from "@/components/Form";
import TaskItem, { TaskItemProps } from "@/components/TaskItem";
import { TasksContext, TasksContextProps } from "./context";

export interface FormDataProps {
  taskName: string;
  id?: string;
}

const Tasks = () => {
  const [formData, setFormData] = useState<FormDataProps>({ taskName: "" });
  const [tasksList, setTasksList] = useState<TaskItemProps[]>([]);

  const { data, isFetched, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      return await API.get("/tasks");
    },
    staleTime: 1000 * 60,
  });

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
      <div className="min-h-screen pt-60 bg-slate-950">
        <div className="flex flex-col justify-center items-center">
          <div className="w-2/4">
            <Form />
          </div>
          <div className="w-2/4">
            <div className="w-full">
              {tasksList.map(({ ...props }) => (
                <TaskItem key={props.id} id={props.id} name={props.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TasksContext.Provider>
  );
};

export default Tasks;
