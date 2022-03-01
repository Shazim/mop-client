import React from 'react'
import {Redirect} from 'react-router-dom'
import { getCookie } from 'cookies/Cookies'

function WithPrivateRoute(WComponent) {
   const newComponent = () => {

      if(getCookie('user')?.access_token){
         return <WComponent />
      }else{
         return <Redirect to="/?login=false" />
      }

   }
   return newComponent
}

export default WithPrivateRoute



