const { spawn } = require('child_process');

const process1 = spawn('zig', ['run', './child1.zig']);
const process2 = spawn('python', ['./child2.py', 2, 3]);

const main = () => {
    [process1, process2].forEach((process) => {
        process.stdout.on('data', (data) => {
            const result = data.toString();
    
            console.log(result);
        });
    })
};

main();
