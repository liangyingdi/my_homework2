import { useInfo } from "@view/src/app/context";

export default ({ params }: { params: { userId: string, id: string } }) => {

    return <div>
        id: {params.id}<br/>
        user_id: {params.userId}<br/>
        name: {params.id}
    </div>
}