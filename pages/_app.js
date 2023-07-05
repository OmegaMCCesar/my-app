import Navbar from '@/components/nav'
import '@/styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/footer.module.css'
import { useState } from 'react'



export default function App({ Component, pageProps }) {

const [menu, setMenu] = useState(true)

const menuDespegable = () => {
  setMenu(!menu)
 }
  return <>
   <Head>
        <title>OmegaMC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Omega.ico" />
      </Head>
      <header>
        <Link href='/'>
         Omega MC
        </Link>
        <button  onClick={menuDespegable}>Menu</button>
           <Navbar menu={menu} setMenu={setMenu}/>
        </header>
  <Component {...pageProps} />
        <footer>
          <Link href='/about' className={styles.sn}>Sobre nosotros</Link>
          <Link href='/' className={styles.sn}>Home</Link>
            <div className={styles.wnumero}>
            <img src='/whats.ico' className={styles.icon}/>
            <h3>56 26 88 57 26</h3>
            </div>
            <div className={styles.wnumero}>
            <img src='/whats.ico' className={styles.icon}/>
             <h3>56 18 80 19 42</h3>
            </div>
        </footer> 
  </>
}
