import React, {useState} from 'react';
const apiUrl = process.env.BACKEND_IP;

export function App(props) {
 const [text, setText]= useState('')
 
const data = `${apiUrl}/get_data/`;

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
      <h2>Hello from React.</h2>
    </div>
  );
}
