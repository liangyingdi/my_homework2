import { ReactNode } from "react"

export default ({ children, dialog, test }: { children: ReactNode, dialog: ReactNode, test: ReactNode }) => {
    return (
        <div>
            {children}
            {dialog}
            {test}
        </div>
    )
}