import {main} from '../../utils/mongodb'

export default async (req,res)=>{
    const {db} = await main()
    const movies =  db.collection('movies')
    .find({})
    res.json(movies)
}