import styles from '../styles/cuerpo.module.css';



const Cuerpo = () => {
  return <div className={styles.anuncios}>
    <div className={styles.garantia}>
      <h1 className={styles.title}>Garantia por escrito</h1>
      <h2 className={styles.text}> 6 meses de garantia en el trabajo realizado. </h2>
    </div>
    <div className={styles.medios_pago}>
      <h1>Metodos de pago</h1>
      <ul className={styles.metodospago}>
        <li>Efectivo<img src='./efectivo.png' alt='efectivo' className={styles.pago} /></li>
        <li>Transferencia<img src='./transferencia.png' alt='trasnferencia' className={styles.pago} /></li>
        <li>Tarjeta Credito/Debito <img src='./masCard.png' alt='mastercard' className={styles.pago}/><img src='./visa.png' alt='visa' className={styles.pago}/></li>
        <li>Vales de despensa<img src='./vale.jpg' alt='vales' className={styles.pago} /></li>
      </ul>
    </div>
  </div>
}

export default Cuerpo;