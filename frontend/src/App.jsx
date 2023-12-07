import React, {useState} from 'react';

export function App(props) {
 const [text, setText]= useState('')
 
 const BASE_URL = "";


//branch api
const data = `http://192.168.0.22:8005/get_data/`;

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
      <h2>Hello React.</h2>
    </div>
  );
}
