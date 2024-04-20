import React,{useState} from 'react'
// const[text,setText]= useState('Enter text here');
export default function TextForm(props) {
  const handleupclick =()=>{
    console.log("uppercase was clicked" + text);
    // setText("you hqave clicked on handleupclick")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoclick = () =>{
    let c = text.toLowerCase();
    setText(c);
  }
  const handleonchange =(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const handlereclick =() =>{
    // const originalText = 'hello';
    let a =reverseString(text);
    setText(a )
    // console.log(reversedText); // Output: 'olleh'
    
  }
  function reverseString(text) {
    return text.split('').reverse().join('');
  }
  
  const[text,setText]= useState('Enter text here');
  // setText("kdsfdazfsgba")
  return (
    <>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="mytext" class="text"></label> */}
  <textarea className="form-control"  value={text}  onChange ={handleonchange} style ={{backgroundColor:props.mode==='dark'?'gray':'light',color: props.mode==='dark'?'white':'black'}}id="mytext" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleupclick}> convert to uppercase </button>
 <button className="btn btn-primary mx-3" onClick={handleLoclick}> convert to lowercase</button> 
 <button className="btn btn-primary mx-3" onClick={handlereclick}> convert to reversecase</button> 

</div>
<div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}
>
  <h1>Your text summary </h1>
  <p>
    {text.split("").length} words and {text.length} characters
  </p>
  <p>
    {0.008*text.split("").length} minutes to read
  </p>
</div>
</>
  )
}
