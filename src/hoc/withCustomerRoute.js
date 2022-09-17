import React from 'react'
import { Redirect } from 'react-router-dom'
import { getCookie } from 'cookies/Cookies'

function withCustomerRoute(WComponent) {
    const newComponent = () => {
        const user = getCookie('user') && JSON.parse(getCookie('user'));
        const { user_type } = user?.user || {}
        const { access_token } = user || {}
        if (user_type === "customer" || !access_token) {
            return <WComponent />
        } else if (user_type === "artist") {
            return <Redirect to="/artist/profile" />
        } else {
            return <Redirect to="/" />
        }
    }
    return newComponent
}

export default withCustomerRoute



