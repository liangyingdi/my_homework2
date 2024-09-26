import { LocalType } from "@repo/local/src/base";
import getLocal from "@repo/local/src/getLocal";

export const generateStaticParams = () => [
    {local: 'cn'},
    {local: 'en'}
]

export const dynamicParams = false;
export default ({params}: {params: {local: LocalType}}) => {
    return (
        <div>
            <div>runtime env NAME:{process.env.NAME}</div>
            <div>file env NAME:{process.env.FILE_NAME} </div>
            <form action="/af/api/login" method="post">
                <span>{getLocal(params.local).password}: </span>
                <input type="password" name="password" id="password"/>
                <br/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}