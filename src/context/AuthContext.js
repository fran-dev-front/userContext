import { createContext } from 'react'

const AuhtContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
    setReloadUser: () => null
})

export default AuhtContext;