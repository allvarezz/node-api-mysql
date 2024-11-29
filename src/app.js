import morgan from 'morgan';
import indexRouter from './routes/index.routes.js';
import express from 'express'
import empleado from './routes/empleados.routes.js';

export const app = express()
app.use(morgan('dev'))
app.use(express.json())



app.use(indexRouter)


app.use(empleado)


app.use((req,res,next)=>{
    res.status(404).json({
        message:"Pagina no encontrada"
    })
})

/* app.post('/form',(req,res)=>{
    req.body
    console.log(req.body)
    res.send("datos enviado")
}) */

   

