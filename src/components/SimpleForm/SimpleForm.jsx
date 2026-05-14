import React from 'react';

const SimpleForm = () => {
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('from submitted')
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='input something' /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;