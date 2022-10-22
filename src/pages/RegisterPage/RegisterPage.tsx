import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { RouteNames } from '../../routes'
import { LoginPageStyled } from '../LoginPage/LoginPage.styles'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import app from '../../config/firebase'

const RegisterPage: React.FC = () => {
  const [registered, setRegistered] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const auth = getAuth(app)

  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>()

  type Email = string
  type Password = string

  type User = {
    email: Email
    password: Password
  }

  const onSubmit = (data: User): void => {
    const signUpWithEmail = () => {
      setRegistered(true)
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          navigate(RouteNames.LOGIN)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          setRegistered(false)
        })
    }
    signUpWithEmail()
  }

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    setRegistered(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        navigate(RouteNames.LOGIN)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        setRegistered(false)
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    <LoginPageStyled className="login-wrapper">
      <div className="login__form-wrapper">
        <h2>Create A Revent Account</h2>
        <p>Create an account and manage your finances</p>
        <button onClick={() => signUpWithGoogle()}>
          Create with Google Account
        </button>
        <p>or</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form-login">
          <label>
            Email address
            <input
              type="text"
              {...register('email', { required: true })}
              placeholder="Enter your email address"
            />
            {errors.email?.type === 'required' && (
              <label className="form-validation">Email is required</label>
            )}
          </label>

          <label>
            Password
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Enter your password"
            />
            {errors.password?.type === 'required' && (
              <label className="form-validation">Password is required</label>
            )}
          </label>

          <button type="submit">Create Account</button>
        </form>
        <div className="login_form-create">
          <p>
            Already registered?
            <Link to={RouteNames.LOGIN}>Login</Link>
          </p>
        </div>
      </div>
    </LoginPageStyled>
  )
}

export default RegisterPage
