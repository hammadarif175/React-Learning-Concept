import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className='container my-2'>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>            
        </>
    )
}

