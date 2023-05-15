import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {FaTools} from 'react-icons/fa'
import {BiFridge,BiHomeAlt} from 'react-icons/bi'
import {MdPointOfSale} from 'react-icons/md'
import {GiWashingMachine,GiThermometerCold,GiBlender,GiPuzzle} from 'react-icons/gi'

const Navbar = ({menu, setMenu}) => {
  return <div className={menu===true ? styles.mavesOn: styles.mavesOff}>
<Link href='/' className={styles.links} onClick={() => setMenu(!menu)}>Home<BiHomeAlt/></Link>   
<Link href='/about' onClick={() => setMenu(!menu)} className={styles.links} >Sobre Nosotros<img src='/Omega.ico' className={styles.ico}/></Link>
<Link href='/services' onClick={() => setMenu(!menu)} className={styles.links}>Servicios <FaTools /></Link> 
<Link href='/refrigeracion' onClick={() => setMenu(!menu)} className={styles.links}>Refrigeracion<BiFridge/></Link>
<Link href='/lavado' onClick={() => setMenu(!menu)} className={styles.links}>Lavado<GiWashingMachine/></Link>
<Link href='/aire/aire' onClick={() => setMenu(!menu)} className={styles.links}>Air Acon<GiThermometerCold/></Link>
<Link href='/electrodomesticos/electrodomesticos' onClick={() => setMenu(!menu)} className={styles.links}>Varios<GiBlender/></Link>
<Link href='/refac' onClick={() => setMenu(!menu)} className={styles.links}>Refacciones<GiPuzzle/></Link>
<Link href='/venta' onClick={() => setMenu(!menu)} className={styles.links}>Venta<MdPointOfSale/></Link>
  </div>
}

export default Navbar;