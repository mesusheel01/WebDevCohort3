// -----------Promisified version of fs.readFile, fs.writeFile, cleanFile--------------
const fs = require('fs')
const { resolve } = require('path')
function promisifiedWriteFile(path,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,data,err=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}


///for read file
function promisifiedReadFile(path,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,encoding,(err,data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}


/// promisified clean file

function promisifiedCleanFile(path) {
    return new Promise((resolve, reject) => {
        promisifiedReadFile(path, 'utf-8')
            .then(data => {
                const newData = data.trim();
                return promisifiedWriteFile(path, newData);
            })
            .then(() => resolve('File cleaned successfully'))
            .catch(err => reject(err));
    });
}

promisifiedCleanFile('a.txt').then(msg => console.log(msg))
// promisifiedWriteFile('a.txt', '   mai hoon gian   ').then(msg => console.log(msg))
