import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux';
import valiadator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useSelector } from 'react-redux';



export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui )
  const [formValues, handleInputChange] = useForm({
    name: 'Samuel',
    email: 's.angujw@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const {name, email, password, password2} = formValues;
  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()){
      console.log('Formulario Correcto')
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0){
      dispatch(setError('Name is required'))
      return false;
    } else if (!valiadator.isEmail(email)) {
      dispatch(setError('Invalid email'))
      return false
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Password must be least 6 characters and equal to password2'))
      return false
    }

    dispatch(removeError())
    return true;
  }

  return (
    <>
    <h3 className="auth__title">Register</h3>
    <form onSubmit={handleRegister}>
      {
        msgError && (
        <div className="auth__alert-error">
         {msgError}
        </div>
        )

      }
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="auth__input"
        onChange={handleInputChange}
        value={name}
      />  
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="auth__input"
        onChange={handleInputChange}
        value={email}
      />  
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="auth__input"
        onChange={handleInputChange}
        value={password}
        autoComplete="off"
      />
      <input
        type="password"
        placeholder="Confirm password"
        name="password2"
        className="auth__input"
        onChange={handleInputChange}
        value={password2}
        autoComplete="off"
      />
      <button 
        type="submit"
        className="btn btn-primary btn-block mb-5"
      >
        Register
      </button> 
     
     <Link className="link" to="/auth/login">
       Already registered?
     </Link>
     
    </form>
  </>
  )
}
