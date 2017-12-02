const http = require('http');

http.get(process.argv[2], function(req){
    var show = "";
    req.setEncoding('utf8');
    
    
    req.on('error', function(error){
        console.log(error)
    })
    
    req.on('data', function(data) {
      show += data;
       
    })
    
    req.on('end', function(){
        console.log(show.toString().length);
        console.log(show.toString());
    })
   });
  