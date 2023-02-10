import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';
export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

export function meta(){
  return(
    {
      title: 'GuitarLS - Sobre Nosotros',
      description: 'Venta de guitarras, blog de musica'
    }
  )
}

function Nosotros() {


  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>
            Nulla sed mauris urna. Sed eu lorem vel ex consequat gravida. In sit amet massa sit amet nisl euismod eleifend. Morbi ut erat vulputate, sagittis odio eget, pharetra erat. Proin hendrerit nibh gravida lectus mollis scelerisque. Aliquam eu leo quis sapien mollis rhoncus. Sed vel laoreet turpis, quis eleifend nulla. Nullam lobortis ligula vel nunc sollicitudin imperdiet. Donec vulputate dapibus imperdiet. Donec non ligula id eros interdum tempus eu in nibh. 
          </p>

          <p>
            Nulla sed mauris urna. Sed eu lorem vel ex consequat gravida. In sit amet massa sit amet nisl euismod eleifend. Morbi ut erat vulputate, sagittis odio eget, pharetra erat. Proin hendrerit nibh gravida lectus mollis scelerisque. Aliquam eu leo quis sapien mollis rhoncus. Sed vel laoreet turpis, quis eleifend nulla. Nullam lobortis ligula vel nunc sollicitudin imperdiet. Donec vulputate dapibus imperdiet. Donec non ligula id eros interdum tempus eu in nibh. 
          </p>

        </div>
      </div>
    </main>
  )
}

export default Nosotros