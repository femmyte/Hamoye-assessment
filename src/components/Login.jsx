import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
const Login = () => {
  const errRef = useRef()
  const navigate = useNavigate()
  const [isError, setIsError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsError(null)
    setIsLoading(true)
    if (email !== '' && password !== '') {
      setIsLoading(false)
      navigate('/dashboard')
    } else {
      setErrMsg(
        'Email or password can not be empty, use anything as your login details'
      )
      setIsLoading(false)
      navigate('/')
    }
  }
  return (
    <div className='login_container'>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg text-center' : 'offscreen'}
        aria-live='assertive'
      >
        {errMsg}
      </p>
      <div className='login_wrapper'>
        <h2>Login to the Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            className='signup_input'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email address'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='passsword'
            className='signup_input'
            placeholder='choose password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLoading ? (
            <button disabled={isLoading} className='signup_btn'>
              Sign In
            </button>
          ) : (
            <button className='signup_btn' disabled={isLoading}>
              Loading...
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
