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
    // your code goes here
    let lines = data.split("\n");
    const t = parseInt(lines.shift());
    for(let c=0; c<t; c++) {
      const a = parseInt(lines.shift());
      const sqrt = Math.floor(Math.sqrt(a));
      console.log(sqrt);
    }
}