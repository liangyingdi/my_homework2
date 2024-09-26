export default ({ children }: { children: JSX.Element }) => {
    return (
        <div style={{ width: "800px", height: "300px", border: '1px solid #333' }}>
            {children}
        </div>
    )
}