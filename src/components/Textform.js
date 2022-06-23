import React ,{useState} from "react";

export default function Textform(props) {

  const handleUpclick =()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert("Converted to Uppercase","success")
  }

  const handleLowclick =()=>{
    console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert("Converted to Lowercase","success")
  }

  
  const handleClear =()=>{
    console.log("Text is cleared" + text);
    let newtext = "";
    setText(newtext)
    props.showalert("Text is cleared","success")
  }

  const handleCopy =()=>{
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showalert("Text is copied","success")
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);

  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showalert("Excess spaces are removed","success")
  }
  




  const[text,setText] = useState("Enter text here")
  
  return (
    <>
    <div slass="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <form>
        <h1 className ="my-5">{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value ={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
      </form>
    </div>
    <button className ="btn btn-primary my-3 mx=3" onClick ={handleUpclick} >Convert to uppercase </button>
    <button className ="btn btn-primary my-3 mx-3" onClick ={handleLowclick} >Convert to Lowercase </button>
    <button className ="btn btn-primary my-3 mx-3" onClick ={handleClear} >Clear text </button>
    <button className ="btn btn-primary my-3 mx-3" onClick ={handleCopy} >Copy Text </button>
    <button className ="btn btn-primary my-3 mx-3" onClick ={handleExtraSpaces} >Remove Extra Spaces </button>
   
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read this content</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
