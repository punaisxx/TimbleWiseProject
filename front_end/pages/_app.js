import "@/styles/globals.css";
// import "@fortawesome/fontawesome-svg-core/styles.css"
// import { config } from "@fortawesome/fontawesome-svg-core"; 
import './style/mystyle.css'
// config.autoAddCss = false;

import Header from './components/Header';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <div style={{ marginTop: '70px' }}></div>
      <Component {...pageProps} />
    </main>
      
  )
}
