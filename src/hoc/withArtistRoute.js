import React from 'react'
import { Redirect } from 'react-router-dom'
import { getCookie } from 'cookies/Cookies'

function withArtistRoute(WComponent) {
    const newComponent = () => {
        const user = getCookie('user') && JSON.parse(getCookie('user'));
        const { user_type } = user?.user || {}
        if (user_type === "artist") {
            return <WComponent />
        } else {
            return <Redirect to="/" />
        }

    }
    return newComponent
}

export default withArtistRoute



