"use client";

export default ({state}: {state: number[]}) => {
    return (
        <div>
            {state.join(",")}
        </div>
    )
}