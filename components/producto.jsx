import styles from '../styles/productos.module.css'

const productos = [
  {name:'gato',
    img:'gato.ico'
  },
  {
    name : 'Polea lavadora Samsung ',
    marca: 'samsung',
    precio: 500,
    img:'https://m.media-amazon.com/images/I/61hrtpQSuML._AC_SL1500_.jpg',
    estado: 'nuevo'
  },{name : 'banda',
    marca: 'samsung',
    img:'data:image/webp;base64,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',
    precio: 100,
    estado:'usado'},
    {name : 'motor',
      marca: 'samsung',
      precio: 1500,
    img:'https://http2.mlstatic.com/D_NQ_NP_990796-MLM76608416711_052024-O.webp',
  link:'https://articulo.mercadolibre.com.mx/MLM-2070831835-c25-motor-para-lavadora-samsung-dc96-00902b-_JM#position%3D5%26search_layout%3Dstack%26type%3Ditem%26tracking_id%3Dddddea1c-2c1b-4dc9-b2fd-00de994c98df'},
      {name : 'valvulas',
        marca: 'samsung',
        precio: 600,
      img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8QdFZt0GiPKXucQ0bnSqCEiWjhlIGSE4vA1d5jRT6nyrm_TBnm0WeF2Ftjx2f2W-wHVTg7R1wtyb_kta8pfSYfotlXIXFIsTqpwvcl8hcYSqB-siCL1yhU728u9Y_VSwAquIr9ZhgxQ&usqp=CAc'}
 ]

 const Products = () => {
  return <div className={styles.containerPrincipal} >{ productos.map((p) => 
    <div className={styles.producto}>
       <img className={styles.img} src={p.img} />
        <h3>{p.name}</h3>
      <h4>{p.marca}</h4>
       <h4>$ {p.precio}</h4>
       <h4>{p.estado}</h4>
       <a target='_blanck' className={styles.link} href={p.link} >Comprar</a>
 </div>
   )}</div>
 }

 export default Products;