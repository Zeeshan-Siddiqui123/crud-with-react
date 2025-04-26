import React from 'react'
import CreateUser from "./src/Screens/CreateUser";
import Read from "./src/Screens/Read";
import UpdateUser from "./src/Screens/UpdateUser";

export const routes = [
    {
        path: '/',
        screen: <Read />
    },
    {
        path: '/createuser',
        screen: <CreateUser />
    },
    {
        path: '/updateuser',
        screen: <UpdateUser />
    }
]