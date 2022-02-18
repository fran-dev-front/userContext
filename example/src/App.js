import React, { useEffect, useState, useMemo } from 'react'
import * as context from 'user-context'

import jwtDecode from 'jwt-decode'


const App = () => {

  const [auth, setAuth] = useState(undefined)
  const [reloadUser, setReloadUser] = useState(false)

  const token = null

  const login = (token) => {
    context.setToken(token)
    setAuth({
      token,
      idUser: jwtDecode(token)
    })
  }
  
  const logout = () => {
    if(auth){
      context.removeToken();
      setAuth(null)

    }
  }

  const autData = useMemo(
    () => ({
      auth: () => null,
      login,
      logout,
      setReloadUser:() => null,
    }),
    [auth]
  );

  useEffect(() => {
    const token = context.getToken()
    if(token){
      setAuth({
        token,
        idUser: jwtDecode(token).id
      })
    } else{
      setAuth(null)

    }
    setReloadUser(false)
  }, [setReloadUser])

  return (
    <context.AuthContext.Provider value={autData}>
    </context.AuthContext.Provider>
    )

  }
export default App
