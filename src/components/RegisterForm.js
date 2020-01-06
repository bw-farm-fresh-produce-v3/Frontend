import React, {useState} from 'react';


const RegisterForm = props => {

    const initialState = {
        fname: '',
        lname: '',
        phone: '',
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
            phone: user.phone,
            password: user.password,
            terms: user.terms
        };
        setUser([...user, newUser]);
    };


    return (
        <div className='register-form'>
            <h3 className='createAcct'>Create new account</h3>
            <form onSubmit={submitForm}>
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
                <label htmlFor='phone'>Phone Number</label>
                <input
                    id='phone'
                    type='tel'
                    name='phone'
                    // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    onChange={handleChanges}
                    value={user.phone}
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
                    type='number'
                    name='city'
                    onChange={handleChanges}
                    value={user.city}
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
                <label className='check-container' htmlFor='terms'>I have read the Terms and Conditions
                <input 
                 id='terms'
                 type='checkbox'
                 name='terms'
                 checked={user.terms}
                />
                <span className='checkmark' />
                </label>
                <button className='createBtn' type='submit'>Create an account</button>
        </form>

        </div>
    );
}

export default RegisterForm;