const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dbavneet:Sony@vivo66@cluster0.8syzg.mongodb.net/dbavneet?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true
},()=>{
    console.log('connected')
})
