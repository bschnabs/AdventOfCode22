import * as fs from 'fs';
const text = fs.readFileSync("./Day2/input.txt");
const data = text.toString('utf-8').split("\n");
const results1 = [
    { result: "A X", value: 4 },
    { result: "A Y", value: 8 },
    { result: "A Z", value: 3 },
    { result: "B X", value: 1 },
    { result: "B Y", value: 5 },
    { result: "B Z", value: 9 },
    { result: "C X", value: 7 },
    { result: "C Y", value: 2 },
    { result: "C Z", value: 6 }
];
const results2 = [
    { result: "A X", value: 3 },
    { result: "A Y", value: 4 },
    { result: "A Z", value: 8 },
    { result: "B X", value: 1 },
    { result: "B Y", value: 5 },
    { result: "B Z", value: 9 },
    { result: "C X", value: 2 },
    { result: "C Y", value: 6 },
    { result: "C Z", value: 7 }
];
let rps1 = new Array();
let rps2 = new Array();
data.map(o => {
    let val1 = results1.find(r => r.result == o);
    rps1.push(Number(val1?.value));
    let val2 = results2.find(r => r.result == o);
    rps2.push(Number(val2?.value));
});
console.log("Strat Guide Total: " + rps1.reduce((a, b) => { return a + b; }));
console.log("Real Guide Total: " + rps2.reduce((a, b) => { return a + b; }));
