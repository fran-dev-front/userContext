export const TOKEN = "token"; 
export const USER = "user";
export const BASE_PATH = "basepath";
import jwtDecode from 'jwt-decode'

export function setToken(token, user){
  localStorage.setItem(TOKEN, token)
  localStorage.setItem(USER, JSON.stringify(user))
}

export function setBaseUrl(url){
  localStorage.setItem(BASE_PATH, url)
}

export function getToken(){
  return localStorage.getItem(TOKEN)
}

export function getUser(){
  return JSON.parse(localStorage.getItem(USER))
}

export function getBaseUrl(){
  return localStorage.getItem(BASE_PATH)
}

export function removeToken(){
  localStorage.removeItem(TOKEN)
  localStorage.removeItem(USER)
}

export function removeBaseUrl(){
  localStorage.removeItem(BASE_PATH)
}

export const login = (token, user, setAuth) => {
  setToken(token, user)
  setAuth({
    token,
    idUser: jwtDecode(token).user_id,
    user: user
  })
}
export const logout = (auth, setAuth) => {
  if(auth){
    removeToken();
    setAuth(null)

  }
}

export function hasExpiredToken(token){
  
  const tokeDecode = jwtDecode(token)
  const expiredDate = tokeDecode.exp * 1000;
  const currentDate = new Date().getTime();
  
  console.log('Token Decode', tokeDecode)
  console.log('Expired Date', expiredDate)
  console.log('Current Date', currentDate)


  if(currentDate > expiredDate){
    return true;
  } 
    return false;
}



