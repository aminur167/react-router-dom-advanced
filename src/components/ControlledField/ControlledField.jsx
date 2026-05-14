import React, { useState } from 'react';

const ControlledField = () => {
    const [password,setPassword] = useState('secret')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    const handlePasswordOnchange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='Enter your email' required /> <br />
                <input type="password" name="password" id="" placeholder='Enter your password' onChange={handlePasswordOnchange} defaultValue={password} required /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;