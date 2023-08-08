import React, {useState} from 'react'

export default function TextForm(props) {
  const[text, setText] = useState('');
  const handleUpClick = ()=>{
    console.log("handle up is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleLoClick = ()=>{
    console.log("handle up is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleStartClick = () =>{
    if(text.length !== 0){
        let newText = text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
        setText(newText);
    }
    props.showAlert('Converted to StartCase', "success");
  }
  
  const handleClearFunc = (ev) => {
    console.log("handle up is clicked");
    setText("");
    props.showAlert("Text Cleared!", "success");
  }
  const handleCopy = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  return (
    <>
      <div className='container' style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} placeholder="Enter Your Text Here" onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light'?'white':'grey', color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>     
        <button disabled = {text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className="btn btn-success mx-1 my-1" onClick={handleStartClick}>Convert to StartCase</button>
        <button disabled = {text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled = {text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearFunc}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text === ""? 0 : text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : "Nothing to Preview Here"}</p>
      </div>
    </>
  )
}