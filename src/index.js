import {PORT} from './config.js'

import {app} from './app.js'


app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})