const fs = require('fs');

console.log('before :' , process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt');

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');

readStream.pipe(writeStream);
readStream.on('end', ()=>{
    console.log('stream: ', process.memoryUsage().rss);
})