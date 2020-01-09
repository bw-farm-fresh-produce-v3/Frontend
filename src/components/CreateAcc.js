import React, { useState } from 'react';
import axios from 'axios';

import * as actions from '../utils/actions';
import { connect } from 'react-redux';
import bgImage from './farm.png';


const CreateAcc = e => {
       const initialState = {
        email: '',
        username: '',
        password: '',
        name: '',
        addressCity: '',
        addressState: '',
        zipCode: '',
        // farmer: false
    };

    const [user, setUser] = useState(initialState);

    console.log("state before submitting request", user)

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(e.target.value);
    };

    const submitForm = e => {
        return dispatch => {

        e.preventDefault();
        console.log('denise was here')
        setUser(initialState);

        axios
        .post("https://bestfarm.herokuapp.com/api/auth/register", user, {
        })
        .then(res => {
            dispatch({type: actions.REGISTER_SUCCESS, payload: res.data})
            sessionStorage.setItem('token, res.data.payload')
        })
        .catch(err => console.error(err));
    }
}

    return (
        <div className='registerContainer'>
            <div className='imageContainer'>
                <img src={bgImage} alt='Farm' />
            </div>
            <div className='registerForm'>
                <h3 className='formHeading'>Create new account</h3>
                <form onSubmit={submitForm}>
                    {/* <div className='buttonDiv'>
                    <button>Farmer</button>
                    <button>Consumer</button>
                    </div> */}
                    
                    <label htmlFor='email'>Email Address</label>
                    <input
                        required
                        id='email'
                        type='email'
                        name='email'
                        onChange={handleChanges}
                        value={user.email}
                    />
                    <label htmlFor='username'>Username</label>
                    <input
                        required
                        id='username'
                        type='text'
                        name='username'
                        onChange={handleChanges}
                        value={user.username}
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
                    <label htmlFor='name'>Name</label>
                    <input
                        required
                        id='name'
                        type='text'
                        name='name'
                        onChange={handleChanges}
                        value={user.name}
                    />
                    <label htmlFor='addressCity'>City</label>
                    <input
                        id='addressCity'
                        type='text'
                        name='addressCity'
                        onChange={handleChanges}
                        value={user.addressCity}
                    />
                    <label htmlFor='addressState'>State</label>
                    <input
                        id='addressState'
                        type='text'
                        name='addressState'
                        onChange={handleChanges}
                        value={user.addressState}
                    />
                    <label htmlFor='zipCode'>Zipcode</label>
                    <input
                        required
                        id='zipCode'
                        type='integer'
                        name='zipCode'
                        minLength='5'
                        maxLength='5'
                        onChange={handleChanges}
                        value={user.zipCode}
                    />
                    <label className='checkContainer' htmlFor='farmer'>I am a farmer
                    <input
                        id='farmer'
                        type='checkbox'
                        name='farmer'
                        checked={user.farmer}
                    />
                    <span className='checkmark' />
                    </label>
                    <button onClick={submitForm} className='createBtn' type='submit'>Create an account</button>
                </form>

                <p>Have an account? <a href='/login'>Sign In</a></p>
            </div>
        </div>
    );
}

export default connect()(CreateAcc);