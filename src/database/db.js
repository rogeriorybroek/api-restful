const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://localhost:27017/api-restful')

    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('connected to batabase')
    })
    
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}