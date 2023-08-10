import '@/styles/globals.css'
import '@/styles/main.css'
import { LenisProvider } from './LenisProvider.js'
export default function App({ Component, pageProps }) {
  return    <LenisProvider>
    
    <Component {...pageProps} />
  </LenisProvider>
}
