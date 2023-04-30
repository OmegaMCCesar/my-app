import styles from '../styles/services.module.css'


export default function Services () {
  return <div className={styles.container}>
    <div >
     <h1>Garantia por escrito</h1>
     <h2>Toda reparacion tiene 6 meses de garantia</h2>
    </div>
    <div>
    <h3>Revision</h3>
    <p>Toda revision tiene un costo de 100 pesos mexicanos.</p>
    <h3>Mantenimeinto</h3>
    <p>Servicio de mantenimiento preventivo.</p>
    <h3>Reparacion</h3>
    <p>Servicio correctivo, refacciones originales.</p>
    <h3>Instalacion</h3>
    </div>
    <div>
      <p>Para mas informacion comuniquese con nosotros via whatsApp</p>
    </div>
  </div>
}