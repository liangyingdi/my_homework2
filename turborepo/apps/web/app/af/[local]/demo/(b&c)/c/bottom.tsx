export default ({ onPush, onFocus }: { onPush: (val: number) => void, onFocus: () => void }) => {
    return (
        <div>
            <button onClick={() => onFocus()}>btn1</button><br />
            <button onClick={() => onPush(Math.floor(Math.random() * 10))}>
                btn2
            </button>
        </div>
    )
}