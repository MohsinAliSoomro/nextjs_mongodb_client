import {MongoClient} from 'mongodb'


const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url,opts)
const dbName = "nextjs"


async function main(){
    let isConnected;
    const connection =await client.connect()
    if(connection){
        isConnected ="Connected"
    }else{
        isConnected="Not Connected"
    }
    const db= client.db(dbName)
    return {
        db,
        client,
        isConnected
    }
}
const insertMovies =async (name,description)=>{
    const movies = await client.db(dbName).collection('movies').insertOne({name,description})
    return movies
}
export {main,insertMovies}