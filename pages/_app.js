// `pages/_app.js`
import 'normalize.css/normalize.css';
import '../styles/global.css'
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return <>
  <NextNProgress></NextNProgress>  
  <Component {...pageProps} />

  </>;
}