import styles from '../styles/marcas.module.css'
const lg = '/LG.ico';
const mabe = '/mabe.ico'

const marcas = [lg, mabe]

const Marcas = () => {
  return <div className={styles.container}>
   {marcas && marcas.map(m => <img src={m} key={m} className={styles.imagenes_logos}/>)} 
  </div>
}

export default Marcas;