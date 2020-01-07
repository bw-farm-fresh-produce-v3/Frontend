import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import bgImage from './farm.jpg';


const CreateAcc = props => {

    const initialState = {
        fname: '',
        lname: '',
        email: '',
        city: '',
        state: '',
        zipcode: '',
        password: '',
        terms: false
    };

    const [user, setUser] = useState({initialState});

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        props.registerUser(user);
        setUser(initialState);
    };

    const registerUser = user => {
        const newUser = {
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            city: user.city,
            state: user.state,
            zipcode: user.zipcode,
            password: user.password,
            terms: user.terms
        };
        setUser([...user, newUser]);
    };

    


    return (
        <div className='registerContainer'>
            <div className='imageContainer'>
                <img src={bgImage}/>
            </div>
            <div className='registerForm'>
                <h3 className='formHeading'>Create new account</h3>
                <form onSubmit={submitForm}>
                    <div className='buttonDiv'>
                    <button>Farmer</button>
                    <button>Consumer</button>
                    </div>
                    <label htmlFor='fname'>First Name</label>
                    <input
                        id='fname'
                        type='text'
                        name='fname'
                        onChange={handleChanges}
                        value={user.fname}
                    />
                    <label htmlFor='lname'>Last Name</label>
                    <input
                        id='lname'
                        type='text'
                        name='lname'
                        onChange={handleChanges}
                        value={user.lname}
                    />
                    <label htmlFor='farm'>Farm Name</label>
                    <input
                        id='farm'
                        type='text'
                        name='farm'
                        onChange={handleChanges}
                        value={user.farm}
                    />
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
                    <label htmlFor='zipcode'>Zipcode</label>
                    <input
                        required
                        id='zipcode'
                        type='text'
                        name='city'
                        onChange={handleChanges}
                        value={user.zipcode}
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
                    <input
                        required
                        id='terms'
                        type='checkbox'
                        name='terms'
                        checked={user.terms}
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