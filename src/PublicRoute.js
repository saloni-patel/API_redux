import React from 'react'
import { Navigate } from 'react-router'

function PublicRoute({element}) {
    const token=localStorage.getItem("token")
    return (
        <div>
            {
                token?<Navigate to="/users"/>:element
            }
        </div>
    )
}

export default PublicRoute
