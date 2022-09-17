import React from 'react'
import { Redirect } from 'react-router-dom'
import { getCookie } from 'cookies/Cookies'

function withArtistRoute(WComponent) {
    const newComponent = () => {
        const user = getCookie('user') && JSON.parse(getCookie('user'));
        const { user_type, stripe_id } = user?.user || {}
        if (user_type === "artist" && stripe_id) {
            return <WComponent />
        } else if (user_type === "artist" && !stripe_id) {
            return <Redirect to="/artist/store" />
        } else {
            return <Redirect to="/" />
        }


    }
    return newComponent
}

export default withArtistRoute



