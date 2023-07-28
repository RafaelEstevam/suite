import Input from "../Input";
import Button from "../Button";
import { useContext } from "react";
import { TasksContext } from "../../app/tasks/context";

interface FormFieldProps {
  taskName: string;
}

const Form = () => {
  const { formData, setFormData, onSubmit } = useContext(TasksContext);

  const handleSetFormData = (e: any) => {
    setFormData({ ...formData, ...{ [e.target.name]: e.target.value } });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex mb-4">
        <Input
          name="taskName"
          id="taskName"
          value={formData.taskName}
          onChange={handleSetFormData}
        />
        <Button
          id="add-task"
          label={formData.id ? `Put` : `Add`}
          type="submit"
          className="p-4 bg-slate-600 rounded-e hover:bg-slate-800 "
        />
      </div>
    </form>
  );
};

export default Form;
