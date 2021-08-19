import React, { useState } from 'react'

const AddMovies = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const save = () => {
        fetch('/api/addmovie', {

            body: JSON.stringify({
                name: name,
                description: description
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'

        }).then((res) => {
            console.log({ res })
            if (res.status === 200) {
                alert("Added successfully...")
                setName("")
                setDescription("")
            } else {
                alert("Not added...")
            }
        })
            .catch((error) => {
                console.log({ error })
                alert("Not added...")
            })
    }
    return (
        <div>
            Add Movies
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <button onClick={save}>Save</button>
            </div>
        </div>
    )
}
export default AddMovies