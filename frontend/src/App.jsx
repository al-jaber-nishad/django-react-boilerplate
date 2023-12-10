import React, {useState} from 'react';
// require('dotenv').config()

export function App(props) {
  const [text, setText]= useState('')

  const BASE_URL = process.env.REACT_APP_BACKEND_IP;

  const data = `${BASE_URL}/get_data/`;

  fetch(`${data}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        setText(data.text)
      })
      .catch(() => {});

  return (
      <div className='App'>
        <h2>{text || ''}</h2>
        <h2></h2>
        <h2>Hello from React</h2>
      </div>
    );
}