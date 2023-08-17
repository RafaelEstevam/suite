import { ReactNode } from "react"

interface DefaultProps {
    children: ReactNode
}

const DefaultTemplate = ({children}: DefaultProps) => {
    return (
        <div className="p-4 bg-slate-900 min-h-screen w-screen">
            <div className="bg-slate-600 rounded-lg">
                {children}
            </div>
        </div>
    )
}

export default DefaultTemplate;