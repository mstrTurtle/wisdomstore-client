import { Grid } from "@mui/material";
import { useState } from "react";
import styles from './category.module.css';

export default function NewBooks({ children }) {
    const [content,setContent] = useState('null')
  function onhover(e){
    if(e=='fst'){
        return 'Featured Book'
    }else if(e=='snd'){
        return 'Fetured Journal'
    }else{
        return 'New books and journals are available every day.'
    }
  }
  function onFst(){
    setContent('Featured Book')
  }
  function onSnd(){
    setContent('Fetured Journal')
  }
  function onHover(){
    setContent('New books and journals are available every day.')
  }

  return <div className={styles.category}>
    <h1>新书展示组件</h1>
    <p>Providing researchers with access to millions of scientific documents from journals, books, series, protocols, reference works and proceedings.</p>
    <div>
      <Grid container>
      <Grid item xs={3}><h1 onMouseEnter={onFst} onMouseLeave={onHover}>Fst</h1></Grid>
      <Grid item xs={3}><h1 onMouseEnter={onSnd} onMouseLeave={onHover}>Snd</h1></Grid>
      <Grid item xs={6}><p>{content}</p></Grid>
      </Grid>
      
      
      
    </div>
  </div>;
}