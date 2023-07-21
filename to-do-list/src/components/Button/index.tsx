
interface ButtonProps {
    label: string
    type: | "button" | "submit"
    onClick?: (props: any) => any
    className?: string
}

const Button = ({label, className, ...props}: ButtonProps) => {
    return (
        <button className={className} {...props}>
            {label}
        </button>
    )
}

export default Button;