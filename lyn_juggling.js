

const http = require('http')

const result = []

let count = 0 , i=0 ;

function results(){
    for(i = 0; i<3; i++){
        console.log(result[i])
    }
}


    function httpGet(i){
        http.get(process.argv[2 + i], function(req){
            var show = "";
            
            req.setEncoding('utf8');
            req.on('data', function(data){
                show += data;
            })
            req.on("end", function(){
                result[i]=show;
                
          count++
                
            if ( count  === 3){
                results()
            }
                    
                
            })
    })
    }for(i = 0; i<3 ; i++){
        httpGet(i)
    }

               


