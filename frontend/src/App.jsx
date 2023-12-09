import React, {useState} from 'react';

export function App(props) {
  const [text, setText]= useState('')

  const BASE_URL = "";

  console.log(process.env)
  const data = `http://127.0.0.1:8000/get_data/`;

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
        <h2>Hello from React asd</h2>
      </div>
    );
}