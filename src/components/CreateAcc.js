import React, { useState } from 'react';
import bgImage from './farm.png';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const CreateAcc = props => {
    const [submittedForm, setSubmittedForm] = useState()
       
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

    let history = useHistory();

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
        // console.log(user);
    };

    const submitForm = e => {
        e.preventDefault();
        console.log('denise was here')
        history.push('/Login')
        // delete user.terms
        // setSubmittedForm()
        // setSubmittedForm()
        setUser(initialState);

        axios
        .post("https://bestfarm.herokuapp.com/api/auth/register", user, {
            headers:{  "Access-Control-Allow-Origin": "*" }
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    };

    return (
        <div className='registerContainer'>
            <div className='imageContainer'>
                <img src={bgImage}/>
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
                    <button className='createBtn' type='submit'>Create an account</button>
                </form>

                <p>Have an account? <a href='/login'>Sign In</a></p>
            </div>
        </div>
    );
}

export default CreateAcc;