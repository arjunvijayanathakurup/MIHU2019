import React, { Component, onState, useState } from 'react';

function AddItem(){
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    // const [handleSubmit, onHandleSubmit] = onState('');

    return(
        <div className="container mt-5">
            <form onSubmit={}>
            <h3 className="grey-text text-darken-3 ">Testing</h3>
                        <div className="form-group">
                            <input type="text" className="form-control" id="quesionfaq" value={question} autoComplete="off" autoFocus onChange={e => setQuestion(e.currentTarget.value)} placeholder="Enter Question" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="answerfaq" value={answer} onChange={e => setAnswer(e.currentTarget.value)} autoComplete="off" required  placeholder="Enter Answer" />
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-add">Add</button>
            </form>
        </div>
    )
}

export default AddItem;