
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {FaTools} from 'react-icons/fa'
import {BiFridge} from 'react-icons/bi'
import {MdPointOfSale} from 'react-icons/md'
import {GiWashingMachine,GiThermometerCold,GiBlender,GiPuzzle} from 'react-icons/gi'


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
    <div className={styles.maves}>
        <Link href='/about'  className={styles.links}>
      Sobre Nosotros
      </Link>
      <img src='/Omega.ico' className={styles.ico}/>
     <Link href='/services' className={styles.links}>
      Servicios <FaTools />
     </Link> 
     <Link href='/refrigeracion' className={styles.links}>Refrigeracion<BiFridge/></Link>
     <Link href='/lavado' className={styles.links}>Lavado<GiWashingMachine/></Link>
     <Link href='/aire/aire' className={styles.links}>Air Acon<GiThermometerCold/></Link>
     <Link href='/electrodomesticos/electrodomesticos' className={styles.links}>Varios<GiBlender/></Link>
     <Link href='/refac' className={styles.links}>Refacciones<GiPuzzle/></Link>
     <Link href='/venta' className={styles.links}>Venta<MdPointOfSale/></Link>
        </div>
    </div>
  )
}
