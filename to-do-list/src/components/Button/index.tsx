
interface ButtonProps {
    id: string,
    label: string
    type: | "button" | "submit"
    onClick?: (props: any) => any
    className?: string
}

const Button = ({label, className, onClick, ...props}: ButtonProps) => {
    return (
        <button onClick={onClick} className={className} {...props}>
            {label}
        </button>
    )
}

export default Button;