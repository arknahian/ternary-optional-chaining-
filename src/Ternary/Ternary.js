import React from 'react';

const Ternary = (props) => {
    const state = props.friend;
    return (
        <div>
            <div>
                
            <h2>Greetings</h2>
            {
                state ? <p>Welcome Friend</p> : <p>Who The Hell are you?</p>
            }
            </div>
            <div>
                <h2>Food</h2>
                {
                    state || <p>His his whose whose</p>
                }
            </div>
            <div>
                <h2>Social Media</h2>
                {
                    state && <p>Let's add you on my social media</p>
                }
            </div>
        </div>
    );
};

export default Ternary;