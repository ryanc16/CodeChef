process.stdin.setEncoding('utf8');
process.stdin.resume();

let data = "1\n3 2\n3 1 2 5 2 0 7 8 5 7 4 1 8\n1 2\n2 3\n";

process.stdin.on('data', function(chunk) {
    data += chunk.toString();
});

process.stdin.on('end', function() {
    runTestCases();
});

process.stdin.on('error', function(e) {
  console.error(e);
});

runTestCases();
process.exit(0);

function runTestCases() {
    let lines = data.split("\n");
    const t = parseInt(lines.shift());
    for(let c=0; c<t; c++) {
        const params = lines.shift().split(" ").map(numberMapper);
        const queries = params[1];
        const arr = params[0];
        const nums = lines.shift().split(" ").map(numberMapper).slice(0, arr);
        
        for(let j=0; j<queries; j++) {
          const querybounds = lines.shift().split(" ").map(numberMapper);
          let sum = 0;
          const set = nums.slice(querybounds[0]-1, querybounds[1]);
          sum = set.reduce((p,v,i) => p + (v^i), 0);
          console.log(sum);
        }
    }
}

function numberMapper(str) {
    return parseInt(str);
}