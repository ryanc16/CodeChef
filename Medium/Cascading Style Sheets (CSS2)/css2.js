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
    const params = lines.shift().split(" ").map(numberMapper);
    const rules = params[0];
    const queries = params[1];
    const map = {};
    for(let r=0; r<rules; r++) {
        const rule = lines.shift().split(" ").map(numberMapper);
        const id = rule[0];
        const attr = rule[1];
        const val = rule[2];
        const priority = rule[3];
        if(id in map === false) {
            map[id][attr] = {
                priority: priority,
                value: val
            };
        }
        if(priority >= map[id][attr].priority) {
            map[id][attr] = {
                priority: priority,
                value: val
            };
        }
    }
    for(let q=0; q<queries; q++) {
        const query = lines.shift().split(" ").map(numberMapper);
        const id = query[0];
        const attr = query[1];
        console.log(map[id][attr].value);
    }
}

function numberMapper(str) {
    return parseInt(str);
}