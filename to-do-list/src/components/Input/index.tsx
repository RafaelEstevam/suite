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
        <input className="rounded-sm text-slate-800" {...props} />
    )
}

export default Input;