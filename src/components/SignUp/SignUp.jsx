import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const[error, setError] = useState('')

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = event.email.value;
        const password = form.password.value;
        const confirm =form.confirm.value;
        console.log(email,password,confirm)

        if(password != confirm){
            setError('Your password did not match')
        }
        else if(password.length < 6){
            setError('password must be six characters of longer')
        }
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form  onSubmit={'handleSignUp'}>
            <div className="form-control">
                <label htmlFor="">Email</label>
                <input type="email"name='email' id='' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password"name='password' id='' required />
               
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password"name='confirm' id='' required />
                <input className='btn-submit' type="submit" value='Sign Up' />
            </div>
        </form>
        <p><small>Already have an account?<Link to="/login">Login</Link></small></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;