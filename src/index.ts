import express,{Router} from 'express'
import testcaseRoute from './routes/testcaseRoute'
import source_codeRoute from './routes/source_codeRoute'
const app = express()
const PORT = 3002

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/testcase',testcaseRoute)
app.use('/source_code' , source_codeRoute)
app.listen(PORT,()=>{
    console.log("objstore is listen on port "+PORT)
})