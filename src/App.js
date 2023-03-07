
import './App.css';
import Navbar from './commponents/Navbar';
import Textform from './commponents/Textform';
import Aout from './commponents/Aout';
import React,{ useState } from 'react';
import Alert from './commponents/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  
  const too=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("asdfghj","success");
      document.title = "textutils - dark";
      setInterval(() => {
        document.title = "textutils - dark mode";
      },2000);
      setInterval(() => {
        document.title = " istall textutils - dark mode";
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("dxcfgvhj","success");
      document.title = "textutils - light";
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert = (a,type)=>{
    setAlert({
      ms:a,
      ty:type
    })
    // setTimeout(() =>{
    //   setAlert(null)
    // },3000)
  }
  return (
    <>
    {/* <Navbar title='fvg' />
<div className="container my-3">


    <Textform haeding="asdfg"/>
    </div>
    </> */}
    
<Navbar title='fvg' mode={mode} too={too} />
<Alert alert={alert}/>
<div className="container my-3">

          <Aout />
         
         
          <Textform haeding="asdfg"/>
            
         



    
        </div>
    
    
    </>
  );
}

export default App;
