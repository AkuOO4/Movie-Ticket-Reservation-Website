/*import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentform, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 

  return (
    <div className="App">
      {
        currentform === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;*/




/*import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { NewRelease } from "./NewRelease";

function App() {
  const [currentform, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 

  return (
    <div className="App">
      {
        currentform === "login" ? <Login onFormSwitch={toggleForm} /> 
        : currentform === "register" ? <Register onFormSwitch={toggleForm}/>
        : <NewRelease />
      }
    </div>
  );
}

export default App;*/




import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import   {NewRelease}   from "./NewRelease";



function App() {
  const [currentform, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 

  return (
    <div className="App">
      {
          currentform === "Login" ? 
          <Login onFormSwitch={toggleForm} onLogin={() => setCurrentForm('NewRelease')} /> 
          : currentform === "Register" ? 
          <Register onFormSwitch={toggleForm}/>
          : <NewRelease />
      }
    </div>
  );
}

export default App;








