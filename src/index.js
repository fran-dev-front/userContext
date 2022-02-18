import React from 'react'
import AuthContext from './context/AuthContext'
export { default as useAuth } from './hooks/useAuth'
export { default as AuthContext } from './context/AuthContext'
export  *  from './authFunctions/authFunctions' 


export const ExampleComponent = (props) => {

  const { autData } = props

  return (
    <div></div>
  )  
}

export default ExampleComponent;