const { spawn } = require('child_process').spawn;

const exec = require('child_process').exec;

const process = spawn('java', ['GenController']);
// const process = exec('dir');





process.stdout.on('data', (data)=> {
    console.log(data.toString());
}); //실행 결과

process.stderr.on('data', (data)=>{
    console.error(data.toString());
});