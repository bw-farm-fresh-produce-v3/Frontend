import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import bgImage from './farm.png';
import axios from 'axios';


const CreateAcc = props => {
    const [submittedForm, setSubmittedForm] = useState()
       
    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
        city: '',
        state: '',
        zip: '',
        password: "",
        // terms: false
    };

    const [user, setUser] = useState(initialState);
    console.log("state before submitting request", user)
    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
        // console.log(user);
    };

    const submitForm = e => {
        e.preventDefault();
        console.log('denise was here')
        // delete user.terms
        // setSubmittedForm()
        // setSubmittedForm()
        // setUser(initialState);

        axios
        .post("https://bw-fresh-farm-produce-backend.herokuapp.com/api/auth/register", user, {
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
                    <label htmlFor='first_name'>First Name</label>
                    <input
                        id='first_name'
                        type='text'
                        name='first_name'
                        onChange={handleChanges}
                        value={user.first_name}
                    />
                    <label htmlFor='last_name'>Last Name</label>
                    <input
                        id='last_name'
                        type='text'
                        name='last_name'
                        onChange={handleChanges}
                        value={user.last_name}
                    />
                    {/* <label htmlFor='farm'>Farm Name</label>
                    <input
                        id='farm'
                        type='text'
                        name='farm'
                        onChange={handleChanges}
                        value={user.farm}
                    /> */}
                    <label htmlFor='email'>Email Address</label>
                    <input
                        required
                        id='email'
                        type='email'
                        name='email'
                        onChange={handleChanges}
                        value={user.email}
                    />
                    <label htmlFor='city'>City</label>
                    <input
                        required
                        id='city'
                        type='text'
                        name='city'
                        onChange={handleChanges}
                        value={user.city}
                    />
                    <label htmlFor='state'>State</label>
                    <input
                        required
                        id='state'
                        type='text'
                        name='state'
                        onChange={handleChanges}
                        value={user.state}
                    />
                    <label htmlFor='zip'>Zipcode</label>
                    <input
                        required
                        id='zip'
                        type='text'
                        name='zip'
                        onChange={handleChanges}
                        value={user.zip}
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
                    <label className='checkContainer' htmlFor='terms'>I have read the Terms and Conditions
                    {/* <input
                        // required
                        id='terms'
                        type='checkbox'
                        name='terms'
                        checked={user.terms}
                    /> */}
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
