import { useState } from 'react';
import React from "react";
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [textcolor, settextColor] = useState('text-dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      settextColor('text-light');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textfun - Dark Mode';
    }
    else {
      setMode('light');
      settextColor('text-dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textfun - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="Textfun" mode={mode} textcolor={textcolor} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter Your text below to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
