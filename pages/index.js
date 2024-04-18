
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Marcas from '@/components/marcas'
import Cuerpo from '@/components/cuerpo'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
       <div className={styles.marcas}>
      <Marcas />
    </div>
     <a target='_blanck' href='https://app-clientes-omega.vercel.app' className={styles.agenda_cita_a}><h1 className={styles.agenda_cita}>Agenda tu cita haciendo clik aqui</h1></a>
      <div className={styles.carrucel}>
       <ul className={styles.ulcarrucel}>
        <li className={styles.licarrucel}><img src='./lav1.jpg' className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src='./lav2.jpg' className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src='./lav3.jpeg' className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src='./lav4.jpeg' className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src='./lav5.jpeg' className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src='./lav6.jpeg' className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src='./lav7.jpeg' className={styles.imgcarrucel}/></li>
       </ul>
      </div>
    <Cuerpo />  
    </div>
  )
}
