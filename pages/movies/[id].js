import React from 'react';
import { main } from '../../utils/mongodb';
function Movie({ movie }) {
    return (
        <div>
            <h2>Name</h2>
            <h1>{movie.name}</h1>
            <h2>Description</h2>
            <h1>{movie.description}</h1>
        </div>
    )
}
export default Movie

export async function getServerSideProps(context) {
    const { id } = context.query
    const { db } = await main()
    const movie = await db.collection('movies').findOne({ name: id })
    return {
        props: {
            movie: JSON.parse(JSON.stringify(movie))
        }
    }
}