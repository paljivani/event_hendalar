import { useState } from "react";

import { useRef } from "react";
import "./App.css";

function App() {
  let value = useRef();
  let gender = useRef();
  let role = useRef();
  let marride = useRef();
  let[val,setval]=useState();

  let submit =(e)=>{
    setval(val=value.current.value)
    alert(`
    Name :   ${val}
    Gender :   ${gender.current.value}
    Role :  ${role.current.value}
    marride status :  ${marride.current.value}`)
    e.preventDefault()
    value.current.value = '';
    gender.current.value = 'none'  ;
    role.current.value = 'none';
    marride.current.value = 'none';
    value.current.focus();
  }
  return (
    <div className="App">
      <div className="main-box">
        <div className="main" >
          <div >
            <form onSubmit={submit}>
              <h1>FORM</h1>
            <input ref={value} placeholder="Enter Your Name" className="name"/>
            <br/><br/>
            <select name="gender" ref={gender} className="gender">
              <option value="none" className="gray">Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select><br/><br/>
            <select name="role" ref={role} className="role">
              <option value="none"  className="gray">Enter your role</option>
              <option value="codar">codar</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
            </select><br/><br/>
            <select name="marride" ref={marride} className="married">
              <option value="none"  className="gray">Enter married status</option>
              <option value="married">married</option>
              <option value="unmarried">unmarried</option>
            </select><br/><br/>
            <input type="submit" value="submit" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;