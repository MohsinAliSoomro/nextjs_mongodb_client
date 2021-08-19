import { main } from "../../utils/mongodb"

export default async(req,res)=>{
    const {name,description}=req.body
    const {db} =await main()
    const insert = await db.collection("movies").insertOne({name,description})

    res.json(insert)
}