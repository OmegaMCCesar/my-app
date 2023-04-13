import styles from '../styles/marcas.module.css'
const LG = '/LG.ico';
const MABE = '/mabe.ico';
const WHIRLPOOL = '/Whirlpool.ico';
const DAEWOO = '/daewoo.ico';
const EASY = '/easy.ico';
const SAMSUNG = '/Samsung.ico';
const SUBZERO = '/subzero.ico';
const TORREY = '/Torrey.ico';



const marcas = [LG, MABE, WHIRLPOOL,DAEWOO,EASY,SAMSUNG,SUBZERO,TORREY]

const Marcas = () => {
  return <div className={styles.container}>
   {marcas && marcas.map(m => <img src={m} key={m} className={styles.imagenes_logos}/>)} 
  </div>
}

export default Marcas;