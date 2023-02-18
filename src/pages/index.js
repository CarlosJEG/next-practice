import Link from 'next/link'
import styles from '@/styles/home.module.scss'

const Home = ({ personajes }) => {
  return (
    <>
      <h2 className={styles.homeTitle}>Proyecto de NextJS Practica</h2>
      <div className={styles.body}>
      {personajes.results.map((personaje) => (
        <div key={personaje.id} className={styles.container}>
          <div className={styles.image}>
            <img src={personaje.image} alt="personaje" />
          </div>
          <div className={styles.description}>
            <p>Name: {personaje.name}</p>
            <p>Status: {personaje.status}</p>
            <p>Specie: {personaje.species}</p>
            <p>Type: {personaje.type}</p>
            <p>Gender: {personaje.gender}</p>
            <Link href={`./details/${personaje.id}`}>
              <button>Ver detalle del personaje</button>
            </Link>
          </div> 
        </div>
      ))}
      </div>
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch("https://rickandmortyapi.com/api/character")
  const personajes = await res.json()

  return {
    props: {
      personajes
    },
    /* revalidate: 15  // le pregunta a la API cada 15 segundos si hay nueva informacion. */
  }
}

export default Home