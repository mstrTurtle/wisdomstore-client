import { useState } from "react";
// import styles from './category.module.css';
import React from "react";
import axios from "axios";

export default function SearchBar({ children }) {
    const [pin,setPin] = useState('')
    const [outcomes,setOutcomes] = useState('')
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setPin(e.target.value)
    console.log(lowerCase);
  };

  
  function genOc(){
    var rows=[]
    for (let i = 0; i < Math.random()*10%10; i++) {
        rows.push(<li>{pin}{i}</li>)
       
    }
    return rows
}

  React.useEffect(() => {
    console.log('hehe');
    const getData = setTimeout(() => {
        console.log('hahaha');
        setOutcomes(genOc())
    }, 1000)

    return () => clearTimeout(getData)
  }, [pin])

  return <div >
      {/* return <div className={styles.category}></div> */}
      <h1>Search Bar</h1>
    <input type="text" onChange={inputHandler}></input>
    <ol>{outcomes}</ol>
    
  </div>;
}