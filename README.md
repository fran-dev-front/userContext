# user-context

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/user-context.svg)](https://www.npmjs.com/package/user-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save user-context
```

## Usage

```tsx
import React, { useEffect, useState } from 'react'
import * as userContext from 'user-context'
import jwtDecode from 'jwt-decode'

const App = () => {
  const [ auth, setAuth ] = useState(undefined)
  const [reloadUser, setReloadUser] = useState(false)
 
  const login = () => {}
  const logout = () => {}
  
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

```

## License

MIT © [fran-dev](https://github.com/fran-dev)
