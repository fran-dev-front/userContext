import React, { useEffect, useState, useMemo } from 'react'
import * as context from 'user-context'
import jwtDecode from 'jwt-decode'
import {loginApi} from './api/userLogin'



const App = () => {

  const [auth, setAuth] = useState(undefined)
  const [reloadUser, setReloadUser] = useState(false)

  const token = null

  const login = (data, user) => {
  context.login(data, user,  setAuth)
  }

  const logout = () => {
    context.logout(auth, setAuth)
  }
  

  const autData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  const  loginButton = async () => {
    console.log('Login')
    const response = await loginApi({identifier:'whitehat94@hotmail.com', password: '123'})
    if(response?.jwt){
      const token = response.jwt
      login(token, response.user)
    }
  }



  useEffect(() => {
    const token = context.getToken()
    const user = context.getUser()
    console.log(user)
    if(token){
      setAuth({
        token,
        idUser: jwtDecode(token).id,
        user: user
      })
    } else{
      setAuth(null)
    }
    setReloadUser(false)
  }, [setReloadUser])

  return (
    <context.AuthContext.Provider value={autData}>
      <button onClick={() => loginButton()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      <button onClick={() => context.hasExpiredToken(context.getToken())}>Token Decode </button>
    </context.AuthContext.Provider>
    )

  }
export default App
