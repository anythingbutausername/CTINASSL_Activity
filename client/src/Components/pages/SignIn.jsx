import React from 'react';
import '../styles/SignIn.css';

const SignIn = () => {
  return (
    <section className="sign-in">
      <h3>Sign In to your Account</h3>

      <form className="signIn-form">
        <input className="form-control" type="email" placeholder='Email' />
        <input className="form-control" type="password" placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>
    </section>
  )
}

export default SignIn
