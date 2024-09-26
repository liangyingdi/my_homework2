export const generateStaticParams = async () => {
    return [
        {
            id: '1',
            local: 'cn'
        },
        {
            id: '2',
            local: 'cn'
        },
        {
            id: '3',
            local: 'cn'
        },
        {
            id: '1',
            local: 'en'
        },
        {
            id: '2',
            local: 'en'
        },
        {
            id: '3',
            local: 'en'
        },
    ];
};

export const dynamicParams = false;

export default async({params}: {params: {id: string, local: string}}) => {
    await new Promise((res: (value: unknown) => void) => setTimeout(() => res(''), 3000));

    return (
        <div>
            id:{params.id}
        </div>
    )
}