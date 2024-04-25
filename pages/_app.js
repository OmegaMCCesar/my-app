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
        <Link  href='/'>
         Omega MC
        </Link>
        <button  onClick={menuDespegable}>Menu</button>
           <Navbar menu={menu} setMenu={setMenu}/>
           <div className={styles.wnumero}>
            <h3>56 26 88 57 26</h3>
            <a className={styles.numeroWhatss} href="tel:5626885726"><img src='/whats.ico' className={styles.logoWhatss}/></a>       
            </div>
            <div className={styles.redesSocialesContainer}>
           <a href='https://www.instagram.com/omegamcoficial/' target='_blanck'><img src='/insta.ico' className={styles.logosfaceinsta} /></a>
            <a href='https://www.facebook.com/OmegaMCOficial' target='_blanck'><img src='/Facebook.ico' className={styles.logosfaceinsta}/></a>
            </div>
        </header>
  <Component {...pageProps} />
        <footer>
          <div className={styles.footerr}>
          <Link href='/about' className={styles.sn}>Sobre nosotros</Link>
          <Link href='/' className={styles.sn}>Home</Link>
          </div>
            {/*<h4>E-mail: omegamcconcatco@hotmail.com</h4>*/}
        </footer> 
  </>
}
