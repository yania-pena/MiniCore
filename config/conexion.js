const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '	lcpbq9az4jklobvq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: '	l4o28izwn0mlwumh',
    password: 'u45x5wvdbauod19s',
    database: 'i14rfxqyqln3e88c'

})

connection.connect((error) => {
    if(error){
        console.error('CONNECTION FAILED: ', error)
        return
    }
    console.log('Database Connection Succesful!')
})

module.exports = connection