import Link from "next/link";
import styles from './styles.module.css'

export default function Aire(){
  return <>
   <h1>Aire acondicionado</h1>
   <p>Instalacion de minisplit y unidad de enfriamiento</p>
  <Link href='/aire/miniSplit' className={styles.link_mini}>minisplit</Link>
  </>
}