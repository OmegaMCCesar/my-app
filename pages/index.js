
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.container_logo_name}>
     <h1 className={styles.title}>
      Omega MC
     </h1>
     <img src='/Omega.ico' className={styles.imgLogo}/> 
    </div>  
    <nav className={styles.nav}>
     <Link href='/about'  className={styles.links}>
      Sobre Nosotros
      </Link>
     <Link href='/services' className={styles.links}>
      Servicios
     </Link> 
    </nav>
    </div>
  )
}
