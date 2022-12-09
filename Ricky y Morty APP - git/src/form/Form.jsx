import React from 'react'
import styled from './Form.module.css'
import validation from './validation'


export default function Form(props) {
  const [userData, setUserData] = React.useState({ username: '', password: '' });
  
  const [errors, setErrors] = React.useState({username: '', password: ''})

   const handleInput = (e)=>{
     setUserData({...userData, [e.target.name]:e.target.value})
     setErrors(
      validation({...userData,[e.target.name]:e.target.value})
    )
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    props.login(userData)
  }


  return (
    <div className={styled.Form}>
        <label>UserName </label>
        <input type='text' name='username' placeholder='Ingrese usuario' onChange={handleInput} />
        <label>Password </label>
        <input type='password' name='password' placeholder='Ingrese password' onChange={handleInput} />
        <button onClick={handleSubmit}>Ingresar</button>
    </div>
  )
}




