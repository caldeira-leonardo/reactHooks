import { useEffect, useState } from "react"

export default function UseEffectHook() {
    const [resourceType, setResourceType] = useState("posts")

    useEffect(() => {
        console.log("Vai acontecer quando o houver a mudança no useEffect")
        //nesse caso quando o componente for montado

        return console.log(
            "Vai acontecer antes da proxima mudança do useEffect"
            //nesse caso quando o componente for desmontado

            //Tudo que estiver dentro do return acontece antes da próxima
            //execução do useEffect
        )
    }, [])

    return ( 
        <>
            <div>
                <button onClick={() => setResourceType("post")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>
                    Comments
                </button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}
