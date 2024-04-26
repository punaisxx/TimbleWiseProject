import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
import '/Users/rawinnipha/TimbleWiseProject/timblewise/pages/style/mystyle.css'
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
