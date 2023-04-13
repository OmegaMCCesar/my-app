import styles from '../styles/marcas.module.css'

const marcas = ['LG','Whirlpool','daewoo','mabe','easy','Samsung','Torrey','subzero']

const Marcas = () => {
  return <div className={styles.container}>
   {marcas && marcas.map(m => <img src={`/imagenes/${m}.ico`} key={m} className={styles.imagenes_logos}/>)} 
  </div>
}

export default Marcas;