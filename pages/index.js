
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Marcas from '@/components/marcas'
import Cuerpo from '@/components/cuerpo'


const lav1 = '/lav1.ico'
const lav2 = '/lav2.ico'
const lav3 = '/lav3.ico'
const lav4 = '/lav4.ico'
const lav5 = '/lav5.ico'
const lav6 = '/lav6.ico'
const lav7 = '/lav7.ico'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
       <div className={styles.marcas}>
      <Marcas />
    </div>
     <a target='_blanck' href='https://app-clientes-omega.vercel.app' className={styles.agenda_cita_a}><h1 className={styles.agenda_cita}>Agenda tu cita haciendo clik aqui</h1></a>
      {/*<div className={styles.carrucel}>
       <ul className={styles.ulcarrucel}>
        <li className={styles.licarrucel}><img src={lav1} className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src={lav2} className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src={lav3} className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src={lav4} className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src={lav5} className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src={lav6} className={styles.imgcarrucel}/></li>
        <li className={styles.licarrucel}><img src={lav7} className={styles.imgcarrucel}/></li>
       </ul>
      </div>*/}
      <div className={styles.slider}>
        <div className={styles.slider_track}>
         <div className={styles.slide}>
          <img  src={lav1} className={styles.imgslide}/>
         </div>
         <div className={styles.slide}>
          <img  src={lav2} className={styles.imgslide}/>
         </div>
         <div className={styles.slide}>
          <img  src={lav3} className={styles.imgslide}/>
         </div>
         <div className={styles.slide}>
          <img  src={lav4} className={styles.imgslide}/>
         </div>
         <div className={styles.slide}>
          <img  src={lav5} className={styles.imgslide}/>
         </div>
         <div className={styles.slide}>
          <img  src={lav6} className={styles.imgslide}/>
         </div>
         <div className={styles.slide}>
          <img  src={lav7} className={styles.imgslide}/>
         </div>
        </div>
      </div>
    <Cuerpo />  
    </div>
  )
}
