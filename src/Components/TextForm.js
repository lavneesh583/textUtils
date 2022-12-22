import React, {useState} from 'react';

export default function TextForm (props) {
    const handleUpclick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }
    const handleLoclick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const handleClearText = ()=> {
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared", "success")
    }
    const handleCopy = ()=> {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied", "success")
    }
    const[text, setText] = useState('Enter text here')
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length ===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick} >Convert to Uppercase</button>
            <button disabled={text.length ===0} className='btn btn-primary mx-1 my-1' onClick={handleLoclick} >Convert to Lowercase</button>
            <button disabled={text.length ===0} className='btn btn-primary mx-1 my-1' onClick={handleClearText} >Clear Text</button>
            <button disabled={text.length ===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy Text</button>
        </div>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2>Priview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}




