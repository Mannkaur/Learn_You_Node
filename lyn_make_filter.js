const fs = require("fs");
const path = require("path");

 module.exports = function( dir, ext, callback) {
     
     fs.readdir(dir, function(err, show){
         
    if (err){
        return callback(err)
    }
    
    show = show.filter(function(file)
        {
            return path.extname(file) == '.' +ext 
        })
      callback(null,show)
        })
    }


