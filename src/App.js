import React from 'react';
import FormController from './components/FormController';
import './styles/index.css';

const fields = {
  "First Name": {
    required: true,
    "full-width": false
  },
  "Last Name": {
    required: true,
    "full-width": false 
   },
  "Password": {
    required: true,
    "full-width": false 
  },
  "Confirm Password": {
    required: true,
    "full-width": false 
  },
  "Email": {
    required: true,
    "full-width": true 
  },
  "Telephone": {
    required: false,
    "full-width": true 
  },
  "Role": {
    required: false,
    "full-width": true 
  },
  "Country": {
    required: false,
    "full-width": true 
  },
  "Mobile": {
    required: false,
    "full-width": true 
  },
  "Department": {
    required: false,
    "full-width": true 
  },
  "IM": {
    required: false,
    "full-width": true 
  },
  "Organization": {
    required: false,
    "full-width": true 
  },
  "URL": {
    required: false,
    "full-width": true 
  }
}

function App() {
  return (
    <div className="App">
      <FormController fields={fields}></FormController>
    </div>
  );
}

export default App;
