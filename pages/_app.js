// `pages/_app.js`
import 'normalize.css/normalize.css';
import '../styles/global.css'
import NextNProgress from 'nextjs-progressbar';
import store from '../store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
  <NextNProgress></NextNProgress>  
  <Component {...pageProps} />

  </Provider>;
}