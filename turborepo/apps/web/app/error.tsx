'use client';
export default ({ error, reset }: { error: Error, reset: () => void }) => {
    return <div>
        {error.message}
    </div>
}