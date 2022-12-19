import { Grid } from "@mui/material";
import { useState } from "react";
import styles from './category.module.css';

export default function NewBooks({ children }) {
    const [content,setContent] = useState('传智商城, 传播智慧.')
  function onFst(){
    // 在鼠标悬停在第一个推荐项目时触发
    setContent('一瓶魔法药水')
  }
  function onSnd(){
    // 在鼠标悬停在第二个推荐项目时触发
    setContent('本草纲目书籍')
  }
  function onHover(){
    // 在鼠标离开悬停项目时触发
    setContent('传智商城, 传播智慧.')
  }

  return <div className={styles.category}>
    <p>传智商城为您提供最优质的商品</p>
    <div>
      <Grid container> {/*Grid网格, 由Material UI库实现的机制*/}
      <Grid item xs={3}><div onMouseEnter={onFst} onMouseLeave={onHover}> {/*定义div, 里面放置img标签, 并且定义悬停和离开时触发的js函数 */}
        <img src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F1265897-ba0d898c63e4c821.jpg&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673947450&t=31ce12dd8d0bf22e509f7ef55b9e9c3d' style={{'maxWidth':'100%','maxHeight':'100%'}}></img>
        </div></Grid>
      <Grid item xs={3}><div onMouseEnter={onSnd} onMouseLeave={onHover}>{/*定义div, 里面放置img标签, 并且定义悬停和离开时触发的js函数 */}
        <img src='http://collection.sinaimg.cn/yjjj/20131225/U5826P1081T2D138067F6DT20131225081830.jpg' style={{'maxWidth':'100%','maxHeight':'100%'}}></img>
        </div></Grid>
      <Grid item xs={6}><p>{content}</p></Grid>{/*定义网格, 显示悬停时显示的信息 */}
      </Grid>
    </div>
  </div>;
}