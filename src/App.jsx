import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../Routes'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {routes.map(({path, screen},index)=>(
                        <Route key={index} path={path} element={screen}/>
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
