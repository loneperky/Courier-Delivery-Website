import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path, {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import auth from './auth.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('../public'))
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

// Register and Login route
app.use('/auth/',auth)
 

app.listen(3000,()=>{
  console.log('server runing on port 3000')
})
