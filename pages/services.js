import styles from '../styles/services.module.css'


export default function Services () {
  return <div className={styles.container}>
    <div >
      <a target='_blank' href='https://app-clientes-omega.vercel.app'><h1 className={styles.AppClientesOmega}>Agende una cita aqui</h1></a>
     <h3 className={styles.h3Ul}>Garantia por escrito</h3>
     <ul  className={styles.uListServices}>
      <li>Toda reparacion tiene 6 meses de garantia</li>
     </ul>
    </div>
    <div>
    <h3 className={styles.h3Ul}>Revision</h3>
    <ul className={styles.uListServices}>
    <li>Valoracion y revision integral de tus equipos.</li>
    <li>Acudiremos a tu domicilio lo antes posible.</li>
    </ul>
    <h3 className={styles.h3Ul}>Servicio de Mantenimeinto Preventivo</h3>
    <ul className={styles.uListServices}>
      <li>Limpieza interna y externa del equipo</li>
      <li>Lubricacion de piezas moviles</li>
      <li>Revision de lineas electricas</li>
      <li>Revision de terminales electricas</li>
      <li>Revision de empaques u orrings</li>
      <li>Revision de arneces y acoplamientos</li>
      <li>Cambio de bandas, sellos sin consto extra, incluidas en algunos equipos</li>
    </ul>
    <p>Da mas vida util a tus equipos, brindamos el soperte y matenimiento que tus equipos necesitan.
      Es mejor un servicio preventivo que un servicio correctivo
    </p>

    <h3>Reparacion</h3>
    <p>Todas las reparaciones y servicios de mantenimiento,para tu seguridad son realizadas en tu domicilio.
      Las piezas o refaciones a cambiar son nuevas y originales.
    </p>
    
    <h2>Precios Fijos</h2>
    <p>Servicio correctivo, refacciones originales.</p>
    <h3>Instalacion</h3>
    </div>
    <div>
      <p>Para mas informacion comuniquese con nosotros via whatsApp</p>
    </div>
  </div>
}