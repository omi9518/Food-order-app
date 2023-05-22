import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/LogInComp/Login"
import App from "./App"

function ReactRouter(){


    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/App" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter