import { PageProvider } from "../context";

export default ({ children, dialog }: { children: React.ReactNode, dialog: React.ReactNode }) => {
    return (
        <PageProvider>
            {dialog}
            {children}
        </PageProvider>
    )
}