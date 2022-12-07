// import fetch from 'node-fetch';
import * as fs from 'fs';
// import  from 'url';
// const response = await fetch('https://adventofcode.com/2022/day/1/input');
// const data = await response.json();
// const text = fs.readFileSync(path.resolve(path.dirname("/"), "input.txt"));
const text = fs.readFileSync("C:\\Users\\bschnable\\source\\repos\\AdventOfCode22\\Day1\\input.txt");
const data = text.toString('utf-8').split("\n");
let curElf = 0;
let elfFood = new Array();
data.map(o => {
    let val = o.replace("\r", "");
    if (val.length > 0) {
        curElf += Number(val);
    }
    else {
        elfFood.push(curElf);
        curElf = 0;
    }
});
console.log("Largest Calories: " + Math.max(...elfFood));
elfFood.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
let top3 = elfFood.slice(0, 3).reduce((a, b) => {
    return a + b;
});
console.log("Top 3 Calories: " + top3);
let msg = "Merry Christmas";
console.log(msg);
