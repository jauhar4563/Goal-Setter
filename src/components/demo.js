
import { useState } from "react"

const Demo =()=>{
    const [hello,setHello] = useState("Hello")
    const hideHeading=()=>{
        hello==="Hello"?setHello("Hi"):setHello("Hello")
    }
    return (
        <> 
            <h1 >{hello}</h1>
            <button onClick={hideHeading}>click</button>
        </>
    )
}
export default Demo