import React from 'react'
import { useSelector } from 'react-redux';
import {Route,Navigate} from "react-router-dom"

export default function PrivateRoute({element}) {
    const data = localStorage.getItem('token')
    console.log(data)
    // // const isAuth = true
    // // console.log(isAuth,"auth")
    // return (true ? children : <Navigate to="/"/>)

    return (
        <div>
            {
                data?element:<Navigate to="/login"/>
            }
        </div>
    )
}


