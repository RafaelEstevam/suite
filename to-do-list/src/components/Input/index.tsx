"use client"

interface InputProps {
    name: string
    id: string
    placeholder?: string
    value: any
    onChange: (props: any) => any
}

const Input = ({...props}:InputProps) => {
    return (
        <div className="flex w-full">
            <input className="rounded-s text-slate-800 w-full p-4" {...props} />
        </div>
    )
}

export default Input;