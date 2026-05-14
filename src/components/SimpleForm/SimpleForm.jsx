import React from 'react';

const SimpleForm = () => {
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name='name' placeholder='inter your name' /> <br />
                <input type="text" name='email' placeholder='inter your email' />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;