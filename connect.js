const mongoose = require('mongoose')

mongoose.connect('<MONGODB CONNECTION STRING>',{
    useNewUrlParser: true,
    useCreateIndex: true
},()=>{
    console.log('connected')
})
