# user-context-fran-dev

> Made with create-react-library
> 
> The intention of user-context is to keep the user login while the token is valid. If no you can use the Logout function to erase the token saved in  localStorage to be able to redirect the user to another view. The context will let you create authenticated requests for secure API's. 


[![NPM](https://img.shields.io/npm/v/user-context.svg)](https://www.npmjs.com/package/user-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save user-context-fran-dev
```

## Usage

```tsx
import React, { useEffect, useState } from 'react'
import * as userContext from 'user-context-fran-dev'
import jwtDecode from 'jwt-decode'

const App = () => {
  const [ auth, setAuth ] = useState(undefined)
  const [reloadUser, setReloadUser] = useState(false)
 
 const login = () => {
  context.login(token, setAuth)
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

```

## License

MIT © [fran-dev](https://github.com/fran-dev)
