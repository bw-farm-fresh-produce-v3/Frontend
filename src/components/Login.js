import React, {useState} from 'react';
import bgImage from './farm.png';

const Login = props => {
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

        axios
        .get("https://bw-fresh-farm-produce-backend.herokuapp.com/api/auth/register", user, {
            headers:{  "Access-Control-Allow-Origin": "*" }
        })
        .then(res => console.log(res))
        localStorage.setItem('token', res.data.payload)
        .catch(err => console.error(err));
    };

    return (
        <div className='signinContainer'>
            <div className='imageContainer signinImg'>
                <img src={bgImage}/>
            </div>
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
            <p>Don't have an account? <a href='/register'>Create One</a></p>
            </div>
        </div>
    )

    
}

export default Login;