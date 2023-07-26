import { ReactNode, Fragment } from "react"

interface TemplateProps {
    children: ReactNode
}

const Template = ({children}: TemplateProps) => {
    return (
        <div className="w-full h-screen">
            {children}
        </div>
    )
}

export default Template