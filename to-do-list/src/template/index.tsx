import { ReactNode, Fragment } from "react"

interface TemplateProps {
    children: ReactNode
}

const Template = ({children}: TemplateProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default Template