import styles from '../styles/productos.module.css'

const productos = [
  {
    name : 'Polea tensora secadora',
    marca: 'Samsung',
    precio: 399,
    img:'https://http2.mlstatic.com/D_NQ_NP_865710-MLM46401673434_062021-O.webp',
    estado: 'nuevo'
  },{name : 'Banda 21.6',
    marca: 'Samsung',
    img:'https://http2.mlstatic.com/D_NQ_NP_608023-MLM44379912379_122020-O.webp',
    precio: 99,
    estado:'nuevo',
  link:'https://mercadolibre.com/sec/27zJ5HH'},
    {name : 'motor',
      marca: 'Koblenz',
      precio: 1180,
      estado:'nuevo',
    img:'https://http2.mlstatic.com/D_NQ_NP_606865-MLM49233359528_022022-O.webp',
  link:'https://mercadolibre.com/sec/1ft9mtg'},
      {name : 'Bobina valvulas de agua',
        marca: 'Samsung',
        precio: 195,
        estado:'nuevo',
        link:'https://mercadolibre.com/sec/1J59hHr',
      img:'https://http2.mlstatic.com/D_NQ_NP_893943-MLM73241992773_122023-O.webp'}
 ]

 const Products = () => {
  return <div className={styles.containerPrincipal} >{ productos.map((p) => 
    <div key={p.name} className={styles.producto}>
       <img className={styles.img} src={p.img} />
       <div className={styles.infoProduct}>
         <h3>{p.name}</h3>
         <h4>{p.marca}</h4>
         <h4>$ {p.precio}</h4>
         <h4>{p.estado}</h4>
      </div>
      <a  target='_blanck' className={styles.link} href={p.link} >Comprar</a>
 </div>
   )}</div>
 }

 export default Products;