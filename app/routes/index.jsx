import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';
import { getCurso } from '~/models/curso.server';
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoPosts from '~/components/listado-posts';
import Curso from '~/components/curso';
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';

export function meta(){
  return(
    {
      title: 'GuitarLS',
      description: 'Venta de guitarras, blog de musica'
    }
  )
  
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);

  return{ guitarras: guitarras.data,
          posts: posts.data,
          curso: curso.data}
}



function Index() {

  const {guitarras, posts, curso} = useLoaderData();

  const guitarrasIndex = guitarras.filter(guitarra => guitarra.attributes.precio > 660);
  const postsIndex = posts.reverse().slice(0, 3);

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras 
          guitarras={guitarrasIndex}
        />
      </main>

      <Curso 
        curso={curso.attributes}
        />


      <section className='contenedor'>
        <ListadoPosts
          posts={postsIndex}
        />
      </section>
    </>
  )
}

export default Index