const express = require('express')
const createError = require('http-errors')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const logger = require('morgan')
const chalk = require('chalk')

const userRoute = require('./routes/Users/route')
const adminRoute = require('./routes/Admin/route')
const app = express()
// config dotenv
require('dotenv').config()

app.use(logger('dev'))
// set views engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// use folder public (http://localhost:3000/public)
app.use(express.static(path.join(__dirname, 'public')))
app.use(expressLayouts)
// use route for Admin and user
app.use('/user', userRoute)
app.use('/admin', adminRoute)
app.set('layout', 'layout1')

app.use((req, res, next) => {
    next(createError(404))
})

// create server listen fort 3000
app.listen(3000, () => {
    return console.log(chalk.blue('dang chay port:' + process.env.PORT))
})
