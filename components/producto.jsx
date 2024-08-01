import styles from '../styles/productos.module.css'

const productos = [
  {
    name : 'Polea lavadora',
    marca: 'samsung',
    precio: 500,
    img:'https://m.media-amazon.com/images/I/61hrtpQSuML._AC_SL1500_.jpg',
    estado: 'nuevo'
  },{name : 'Banda 21.6',
    marca: 'samsung',
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
      {name : 'valvulas',
        marca: 'samsung',
        precio: 600,
        estado:'nuevo',
      img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8QdFZt0GiPKXucQ0bnSqCEiWjhlIGSE4vA1d5jRT6nyrm_TBnm0WeF2Ftjx2f2W-wHVTg7R1wtyb_kta8pfSYfotlXIXFIsTqpwvcl8hcYSqB-siCL1yhU728u9Y_VSwAquIr9ZhgxQ&usqp=CAc'}
 ]

 const Products = () => {
  return <div className={styles.containerPrincipal} >{ productos.map((p) => 
    <div className={styles.producto}>
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