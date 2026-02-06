import dotenv from 'dotenv'

dotenv.config({path: './.env'})

import express from 'express'

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Be ready with chai aur code!')
})

app.get(
    '/api/data',
    (req,res)=>{
        const data=[
            {
                id:1,
                name:'Garvansh',
                age:20
            },
            {
                id:2,
                name:'Santosh',
                age:21
            },
            {
                id: 3,
                name: 'Anjali',
                age: 19
            },
            {
                id: 4,
                name: 'Rohit',
                age: 22
            }
        ]

        res.json(data);
    }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})