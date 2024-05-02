import React from 'react'
import Tamplate from '../Components/Tamplate';
import loginImg from '../assets/login.png'
 const Login = ({setLogedIn}) => {
  return (
    <Tamplate
      tittel="WelCome Back"
      discr1="Bulid Skill Today, Tommorow, and baybond"
      discr2="Education with frutuer proof"
      image={loginImg}
      fromtype="login"
      setLogedIn={setLogedIn}
    />
  )
}

export default Login;