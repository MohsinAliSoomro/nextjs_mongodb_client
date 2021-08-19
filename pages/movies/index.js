import React from 'react'
import { main } from '../../utils/mongodb'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
const Movies = ({ movies }) => {
    if (!movies.length) {
        return <div>No Movies exits
            <Link href="/movies/addMovie">Add Movies</Link>
        </div>
    }
    return (
        <div> <Link href="/movies/addMovie">Add Movies</Link>
        <h4 style={{marginLeft:"40px"}}>Movies list</h4>
            <ul className={styles.list}>
                {movies.map((m) => <List movie={m} key={m._id} />)}
            </ul>
        </div>
    )
}

const List =({movie})=>{
    return <li><Link href={`/movies/${movie.name}`}>{movie.name}</Link></li>
}
export async function getServerSideProps(context) {
    const { db } = await main()
    const movies = await db.collection('movies').find({}).toArray()

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies))
        }
    }
}
export default Movies
