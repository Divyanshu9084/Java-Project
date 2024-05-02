import React from 'react'
import singUpimg from '../assets/signup.png';
import Tamplate from '../Components/Tamplate';

 const SingUp = ({setLogedIn}) => {
  return (
    <Tamplate
      tittel="WelCome Back"
      discr1="Bulid Skill Today, Tommorow, and baybond"
      discr2="Education with frutuer proof"
      image={singUpimg}
      fromtype="singUp"
      setLogedIn={setLogedIn}
    />
  )
}

export default SingUp;