import React, { useState } from 'react';

import Container from './Container';

const Name = ({setData, setSecond}) => {
    const [input, setInput] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setData(prevState => ({
            ...prevState,
            "user" : input
        }));
        setSecond(30);
    }
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <Container>
            <div className="page-header">
                <h1 id="containers">Write your name</h1>
            </div>
            <form className="bs-component" onSubmit={handleSubmit}>
                <div className="jumbotron">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Write your name" onChange={handleInputChange}/>
                    </div>
                    <p className="lead">
                        <button className="btn btn-primary btn-lg" type="submit">Next</button>
                    </p>
                </div>
            </form>
        </Container>
    );
}

export default Name;