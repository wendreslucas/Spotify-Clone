import React, { useEffect } from 'react'
import FormLogin from '../../components/Login'

const Login = () => {
  useEffect(() => {
    document.title = 'SpotiClone | Login'
  }, [])

  return (
    <>
      <FormLogin />
    </>
  )
}

export default Login
