"use client";

import { useState, useEffect } from "react";
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

  const handlePutTaskEditaded = async (data: TaskItemProps) => {
    const response = await API.put(`/tasks/${formData.id}`, data);
    const task = response.data;
    const filteredTasks = tasksList.filter((item) => item.id !== data.id);
    if (task) {
      task.taskName = formData.taskName;
      setTasksList([...filteredTasks, ...[task]]);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data: TaskItemProps = {
      taskName: formData.taskName,
    };

    if(formData.id){
      try{
        await handlePutTaskEditaded(data)
      }catch(e){
        console.log(e)
      }
    }

    try{
      const response = await API.post(`/tasks`, data);
      const task = response.data;
      setTasksList([...tasksList, ...[task]]);
    }catch(e){
      console.log(e)
    }
  };

  const context: TasksContextProps = {
    formData,
    setFormData,
    tasksList,
    setTasksList,
    onSubmit: handleSubmit,
  };

  useEffect(() => {
    if(data?.data.length > 0){
      setTasksList(data?.data);
    }
  }, [data])

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
                <TaskItem key={props.id} id={props.id} taskName={props.taskName} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TasksContext.Provider>
  );
};

export default Tasks;
