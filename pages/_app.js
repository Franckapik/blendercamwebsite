import '@/styles/custom.scss'
import '@/styles/globals.css'
import { Quicksand } from "@next/font/google";

const font = Quicksand({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return( 
  <div className={font.className}>
<Component  {...pageProps} />
  </div>
  )
}
