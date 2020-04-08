const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()

//setings
app.set('port',process.env.PORT || 3000) 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'))

//routes 
app.use(require('./routes/index.js'))

//static files
app.use(express.static(path.join(__dirname,'public')))

app.use((req,res) => {
    res.status(404).end('404 not found')
})


app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
    
})