

const http = require('http')

http.get(process.argv[2], function(res){
    res.setEncoding('utf8')

    res.on('error', function(error){
        console.log(error)
    })
    
    res.on('data', function(data) {
        console.log(data)
    })
   })
   
  