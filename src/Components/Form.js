import React, {useState} from 'react'

function Form(props) {
    var borderColor = 'black'
    var btnBorderColor = 'none'
    if(props.mode === 'light'){
        borderColor = 'black'
        btnBorderColor = 'none'
    }
    else{
        borderColor = 'white'
        btnBorderColor = '2px solid white'
    }

    const [text, setText] = useState("Enter the text here...");
    function upperHandler(){
        var innertext = document.getElementById('exampleFormControlTextarea1').value
        setText("Your text has changed to Uppercase now...")
        document.getElementById('exampleFormControlTextarea1').value = innertext.toUpperCase()
    }
    function lowerHandler(){
        var innertext = document.getElementById("exampleFormControlTextarea1").value
        setText("Your text has changed to Lowercase now...")
        document.getElementById('exampleFormControlTextarea1').value = innertext.toLowerCase()
    }
    function clearHandler(){
        document.getElementById("exampleFormControlTextarea1").value = ""
        setText("Enter the text here...")
    }
    function copyHandler(){
        var copyText = document.getElementById("exampleFormControlTextarea1").value
        navigator.clipboard.writeText(copyText);
    }

  return(
    <>  
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
            <input style={{border: `2px solid ${borderColor}`}} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Text - {text}</label>
            <textarea style={{border: `2px solid ${borderColor}`}} placeholder="Enter the text here..." className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <div className="d-flex justify-content-center">
        <button style={{border: `${btnBorderColor}`}} className="btn btn-primary mx-5" onClick={upperHandler} >Convert to Uppercase</button>
        <button style={{border: `${btnBorderColor}`}} className="btn btn-danger mx-5" onClick={lowerHandler}>Convert to Lowercase</button>
        <button style={{border: `${btnBorderColor}`}} className="btn btn-info mx-5" onClick={clearHandler}>Clear</button>
        <button style={{border: `${btnBorderColor}`}} className="btn btn-success mx-5" onClick={copyHandler}>Copy Text</button>
        </div>
    </>
  );
}


export default Form;