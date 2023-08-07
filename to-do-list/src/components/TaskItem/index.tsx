import { useContext, useState } from "react";
import Button from "../Button";
import { TasksContext } from "../../app/tasks/context";
import { API } from "@/config/api";

export interface TaskItemProps {
  id?: string;
  taskName: string;
}

const TaskItem = ({ id, taskName }: TaskItemProps) => {
  const { setFormData, tasksList, setTasksList } = useContext(TasksContext);

  const [complete, setComplete] = useState<boolean>(false);

  const handleCheck = () => {
    setComplete(!complete);
  };

  const handleEdit = () => {
    setFormData({ taskName, id });
  };

  const handleDelete = async () => {
    try{
      const response = await API.delete(`/tasks/${id}`);
      const newTasksList = tasksList.filter((item) => item.id !== id);
      setTasksList(newTasksList);
    }catch(e){
      console.log(e)
    }
  };

  return (
    <div id={id} className="bg-slate-500 rounded mb-4 w-full p-4 flex items-center justify-between gap-4">
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={complete}
          value={complete ? `true` : `false`}
          onChange={handleCheck}
        />
        {complete ? <p className="line-through" data-taskid={id}>{taskName}</p> : <p data-taskid={id}>{taskName}</p>}
      </div>
      <div>
        <Button
          onClick={handleEdit}
          className="p-4 bg-indigo-600 rounded-s hover:bg-indigo-800"
          id={`edit-task-${id}`}
          label="Edit"
          type="button"
        />
        <Button
          onClick={handleDelete}
          className="p-4 bg-red-600 rounded-e hover:bg-red-800"
          id={`delete-task-${id}`}
          label="Delete"
          type="button"
        />
      </div>
    </div>
  );
};

export default TaskItem;
