import { Grid } from "@mui/material";
import { useState } from "react";
import styles from './category.module.css';

export default function NewBooks({ children }) {
    const [content,setContent] = useState('传智商城, 传播智慧.')
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
    setContent('一瓶魔法药水')
  }
  function onSnd(){
    setContent('本草纲目书籍')
  }
  function onHover(){
    setContent('传智商城, 传播智慧.')
  }

  return <div className={styles.category}>
    {/* <h1>新书展示组件</h1> */}
    <p>传智商城为您提供最优质的商品</p>
    <div>
      <Grid container>
      <Grid item xs={3}><div onMouseEnter={onFst} onMouseLeave={onHover}>
        <img src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F1265897-ba0d898c63e4c821.jpg&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673947450&t=31ce12dd8d0bf22e509f7ef55b9e9c3d' style={{'maxWidth':'100%','maxHeight':'100%'}}></img>
        </div></Grid>
      <Grid item xs={3}><div onMouseEnter={onSnd} onMouseLeave={onHover}>
        <img src='http://collection.sinaimg.cn/yjjj/20131225/U5826P1081T2D138067F6DT20131225081830.jpg' style={{'maxWidth':'100%','maxHeight':'100%'}}></img>
        </div></Grid>
      <Grid item xs={6}><p>{content}</p></Grid>
      </Grid>
      
      
      
    </div>
  </div>;
}