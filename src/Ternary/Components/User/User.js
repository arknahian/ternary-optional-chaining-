import React from 'react';

const User = (props) => {
    const {name, email, gender, id} = props.user;
    const arr = [5, 3, 423, 32, 32];
    const total = arr.reduce((total, n) => total + n, 0);
    const filt = arr.filter(a => a == id);
    return (
        <div>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h4>{gender||"undefined"}</h4>
            <p>{total}</p>
            {
                filt.length === 0 ? '' : <p>filter result {filt}</p>
            }
        </div>
    );
};

export default User;