import * as fs from 'fs';
const text = fs.readFileSync("C:\\Users\\bschnable\\source\\repos\\AdventOfCode22\\Day2\\input.txt");
const data = text.toString('utf-8').split("\n");
data.map(o => {
    console.log(o);
});
