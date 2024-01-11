import './CSS/Login.css'

const LoginSignup = () => {
  return (
    <div className="login">
      <div className='login-container'>
         <h1>Sign Up </h1>
         <div className="login-fields">
           <input type="text" placeholder='Enter your name' />
           <input type="email" placeholder='Enter your email'/>
           <input type="password" placeholder='Enter password'/>
          </div>
          <button>Continue</button>
          <p className="login-login">
            Already have an account? <span>Login here</span>
          </p>
          <div className="login-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree to the terms of use and privacy policy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup