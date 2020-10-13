process.stdin.resume();
process.stdin.setEncoding('utf8');

let data = "";

process.stdin.on('data', function(chunk) {
    data += chunk.toString();
});

process.stdin.on('end', function() {
    runTestCases();
});

function runTestCases() {
    let lines = data.split("\n");
    const t = parseInt(lines.shift());
    for(let i=0; i<t; i++) {
        const sal = parseFloat(lines.shift());
        let gross = 0;
        if(sal<1500) {
          gross = sal+(sal*0.1)+(sal*0.9);
        }
        else {
          gross = sal + (sal*0.98)+500;
        }
        console.log(gross);
    }
}