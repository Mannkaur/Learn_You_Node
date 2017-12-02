
  
  const http = require('http')
  const map = require('through2-map');
   
  const server = http.createServer(function(request,response){
    
    if(request.method !=='POST'){
        return response.end('Send post\n');
    }
    request.pipe(map(function(move)
    {
        return move.toString().toUpperCase();
        
    })).pipe(response)
     
  })
  server.listen(Number(process.argv[2]));


