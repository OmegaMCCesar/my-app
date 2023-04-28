import styles from '../styles/about.module.css'

export default function About () {
  return<div className={styles.principal_container}>
     <div className={styles.container}>
       <h1 className={styles.title}>Empresa mexicana comprometida con sus clientes, brindando el merjor servicio en refrigeracion, linea blanca y electrodomesticos.</h1>
       <img src='/Omega.ico' className={styles.ico}/>
     </div>
  </div>
}