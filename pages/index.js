
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


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
    </div>
  )
}
