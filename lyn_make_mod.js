const make_fil = require('./lyn_make_filter.js')
const dir = process.argv[2];
const ext = process.argv[3];

make_fil ( dir, ext, function(err, show){
    if(err){
        return console.log(err)
    }
    
    show.forEach(function(file){
        console.log(file)
    })
})