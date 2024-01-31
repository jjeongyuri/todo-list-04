import React from 'react';
import './Form.css';

const Form = ({onChange,onCreate}) => {
    return(
        <div className="form">
            <input onChange={onChange}/>
            <div className="create-button"
                 onClick={onCreate}>
                +
            </div>
        </div>
    )
}

export default Form;