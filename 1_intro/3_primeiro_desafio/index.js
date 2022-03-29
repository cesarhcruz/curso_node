const fs = require('fs') // file system

fs.readFile('arquivo.txt', 'utf-8', (err, data) =>{

    if(err){
        console.log(err)
        return
    }

    console.log(data)

});

var teste = 5;
var test2 = 15;

console.log(teste + test2)