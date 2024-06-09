import React from "react"
import "../Style.css"
import Base from "./Base"
import {API} from "../BackEnd"
const Home=()=>{
   console.log("API is",{API})
    return(
        <Base title="Home Page" description="HomePage">
            <h1>Home Page</h1>
        </Base>
    )
}

export default Home;