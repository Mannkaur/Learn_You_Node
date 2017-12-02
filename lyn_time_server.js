const net = require('net')

 
let server = net.createServer(function(socket){
   let date = new Date();
    
   let display = date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + " "  + pad(date.getHours()) + ":" + pad(date.getMinutes()) + "\n" ;
    socket.end(display);
    
})
server.listen(process.argv[2]);
     
   
   function pad(n){
       if (n < 10){
           return '0' + n;
       }else{
           return n;
       }
   }