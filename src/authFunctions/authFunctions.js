export const TOKEN = "token"; 
import jwtDecode from 'jwt-decode'

export function setToken(token){
  localStorage.setItem(TOKEN, token)
}

export function getToken(){
  return localStorage.getItem(TOKEN)
}

export function removeToken(){
  localStorage.removeItem(TOKEN)
}

export const login = (data, setAuth) => {
  setToken(data.jwt)
  setAuth({
    token,
    idUser: jwtDecode(data.jwt),
    user: data.user

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



