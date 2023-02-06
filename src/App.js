import React, { useState } from "react";
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import { Button } from 'primereact/button';
const baseURL = "http://localhost:3005/api/test/test";


function App() {
  const [post, setPost] = React.useState(null);

  const showAlert = () => {

    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
      alert(post.message);
    });
  
 
}

  return (
    <div className="App">
      <Button className="btn" label="Submit" aria-label="Submit" onClick={showAlert} />
    </div>
  );
}

export default App;
