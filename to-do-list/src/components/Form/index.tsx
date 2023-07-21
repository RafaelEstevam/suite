"use client"

import { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";

interface FormDataProps {
    taskName: string
}

const Form = () => {

    const [formData, setFormData] = useState<FormDataProps>({taskName: ""});

    const handleSetFormData = (e:any) => {
        setFormData({...formData, ...{[e.target.name]: e.target.value} })
        console.log(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input name="taskName" id="taskName" value={formData.taskName} onChange={handleSetFormData} />
            <Button label="Add" type="submit" />
        </form>
    )
};

export default Form;