import { createContext } from "react"
import {FormDataProps} from "./"
import { TaskItemProps } from "@/components/TaskItem"

export interface TasksContextProps {
    formData: FormDataProps,
    setFormData: (props: FormDataProps) => any,
    tasksList: TaskItemProps[],
    setTasksList: (props: TaskItemProps[]) => any
    onSubmit: (props?: any) => any
}

export const TasksContext = createContext<TasksContextProps>({
    formData: { taskName: `` },
    setFormData: () => { },
    setTasksList: () => { },
    tasksList: [],
    onSubmit: () => { }
})
