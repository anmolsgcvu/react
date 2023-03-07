import React,{useState} from 'react'



function Textform(props) { 
    const he =()=>{
       // console.log("upper1"+text);
        let er= text.toUpperCase();
        setText(er);
    }
    const hea =()=>{
      //console.log("lower1"+text);
       let er= text.toLowerCase();
       setText(er);
    }
    const hee =(event)=>{
        console.log("upfgper1");
        setText(event.target.value);
    }
    const [text,setText]=useState('eter');
    // setText("dfgh");
  return (<>
    <div className='cotainer'>
        <h1>{props.haeding} </h1>
        
  <div className="mb-3">
    
    <textarea className="form-control" onChange={hee}  value={text} id="exa" rows="3"></textarea>

  </div>
  <button className='bt mx-2' onClick={he} >uppercase</button>
  <button className='bt mx-3' onClick={hea} >lowercase</button>
      
    </div>
    <div className='cotainer my-3'>
      <h1>ahjkkh</h1>
      <p>{text.split(" ").length}dfgh,{text.length} dcfvghj</p>
      <p>{0.008 * text.split(" ").length}length</p>
      <h2>privew</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Textform
