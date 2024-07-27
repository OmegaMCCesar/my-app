import styles from '../styles/about.module.css'

export default function About () {
  return<div className={styles.principal_container}>
     <div className={styles.container}>
      <p className={styles.motivo}>Cansados de ver el abuso de los tecnicos hacia las personas, el como abusan de la necesidad de los clientes,
        se fundo Omega MC, estableciendo margenes, valores , expectativas, y un concepto de servicio en el que
        el prestador de servicios(Omega MC) y el cliente esten en condiciones de igualdad.<br/>
        Establecindo precios y metodologias de servicio, para que ambas partes se sientan de manera conforme.<br/>
        Dando total claridad y conocimiento de los servicios al cliente.
      </p>
       <p>Empresa mexicana comprometida con sus clientes, brindando el mejor servicio en refrigeracion, linea blanca y electrodomesticos.</p>
       <img src='/Omega.ico' className={styles.ico}/>

       <div className={styles.container}>
       <p className={styles.slogan}  >Servir para servir.</p>
       </div>
     </div>
  </div>
}