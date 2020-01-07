import React, {useState} from 'react';

const SignInForm = props => {
    const initialState = {
        email: '',
        password: ''
    };

    const [user, setUser] = useState({initialState});

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        props.loginUser(user);
        setUser(initialState);
    };

    return (
        <div className='signinForm'>
            <h3 className='formHeading'>Sign in to account</h3>
            <form>
            <label htmlFor='email'>Email Address</label>
                <input
                    required
                    id='email'
                    type='email'
                    name='email'
                    onChange={handleChanges}
                    value={user.email}
                />
            <label htmlFor='password'>Password</label>
                <input
                    required
                    id='password'
                    type='password'
                    name='password'
                    onChange={handleChanges}
                    value={user.password}
                />
            <button className='signinBtn' type='submit'>Sign In</button>
            </form>
            <p>Don't have an account? <a href='/register-form'>Create One</a></p>
        </div>
    )

    
}

export default SignInForm;

