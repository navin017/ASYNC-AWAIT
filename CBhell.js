const fs = require('fs'); 
let filename = 'text.html'; 
 
fs.exists(filename, exists => { 
    if (exists) { 
        fs.stat(filename, (err, stats) => { 
            if (err) { 
                throw err; 
            } 
            if (stats.isFile()) { 
                fs.readFile(filename, (err, data) => { 
                    if (err) { 
                        throw err; 
                    } 
                    console.log(data.toString()); 
                }); 
            } 
        }); 
    }  
}); 

const { rejects } = require('assert')
let a = require('fs')
let fileName = 'text.html'

const findFile =(fileName,exists=>{
    return new promises(resolve,reject)
 
   
})

