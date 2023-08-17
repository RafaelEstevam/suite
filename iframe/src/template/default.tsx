import { ReactNode } from "react"

interface DefaultProps {
    children: ReactNode
}

const DefaultTemplate = ({children}: DefaultProps) => {
    return (
        <div className="flex flex-col items-start min-h-screen w-screen">
            <div className="bg-slate-600 rounded-lg min-h-screen">
                {children}
            </div>
        </div>
    )
}

export default DefaultTemplate;