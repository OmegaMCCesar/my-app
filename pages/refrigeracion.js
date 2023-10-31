import styles from '../styles/refrigeracion.module.css'

export default function Refri (){
  return <div className={styles.contenedor}>
    <h1 className={styles.refrigeracion_data}>Refrigeracion</h1>
    <h2 className={styles.refrigeracion_data}>Refrigeracion comercial</h2>
    <h4 className={styles.refrigeracion_data}>Costo de mantenimiento preventivo: $ 800.00 pesos</h4>
    <h5 className={styles.refrigeracion_data}>Vitrinas</h5>
    <h5 className={styles.refrigeracion_data}>Conservadores</h5>
    <h5 className={styles.refrigeracion_data}>Congeladores</h5>
    <h5 className={styles.refrigeracion_data}>Vitrinas verticales</h5>
    <h4 className={styles.refrigeracion_data}>Refrigeracion domestica</h4>
  </div> 
}