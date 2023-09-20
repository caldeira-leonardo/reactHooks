import { useState } from "react"

function UseStateHook() {
    const [count, setCount] = useState(() => {
        console.log("Run time") //quando usado com função o state só é executado na primeira
        //vem em que a pagina é renderizada, caso contrário pode renderizar toda vez
        //que o state altera seu valor

        return 4
    })

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default UseStateHook
