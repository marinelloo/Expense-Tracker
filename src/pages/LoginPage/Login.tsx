import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import app from '../../config/firebase'
import { RouteNames } from '../../routes'
import { LoginPageStyled } from './LoginPage.styles'
import { login } from '../../store/features/useSlice'

const Login: FC = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const auth = getAuth(app)
  const dispatch = useDispatch();

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
    const loginWithEmail = () => {
      setAuthenticating(true)
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredentials) => {
          const user = userCredentials.user
          console.log(user)
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
            })
          )
          navigate(RouteNames.DASHBOARD)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          setAuthenticating(false)
        })
    }
    loginWithEmail()
  }

  return (
    <LoginPageStyled className="login-wrapper">
      <div className="login__form-wrapper">
        <h2>Log into your Revent Account</h2>
        <p>Log into your account and manage your finances</p>
        <button>Login with Google Account</button>
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

          <button>Log in</button>
        </form>
        <div className="login_form-create">
          <p>
            New user?
            <Link to={RouteNames.REGISTER}>Create New</Link>
          </p>
        </div>
      </div>
    </LoginPageStyled>
  )
}

export default Login
