import React from 'react';

const Radio = ({index, element, handleInputChange}) => {
    return (
        <div className="btn btn-primary" key={index}>
            <label className="btn btn-primary" htmlFor={index}>
                <input type="radio" name="question" id={index} value={index} required onChange={handleInputChange}/> {element}
            </label>
            <hr className="my-4" />
        </div>
    );
}

export default Radio;