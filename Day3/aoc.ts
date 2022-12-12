import * as fs from 'fs';

const text = fs.readFileSync("./Day3/input.txt")
const data = text.toString('utf-8').split("\n");

const alpha = [
    { result: "a", value: 1 },
    { result: "b", value: 2 },
    { result: "c", value: 3 },
    { result: "d", value: 4 },
    { result: "e", value: 5 },
    { result: "f", value: 6 },
    { result: "g", value: 7 },
    { result: "h", value: 8 },
    { result: "i", value: 9 },
    { result: "j", value: 10 },
    { result: "k", value: 11 },
    { result: "l", value: 12 },
    { result: "m", value: 13 },
    { result: "n", value: 14 },
    { result: "o", value: 15 },
    { result: "p", value: 16 },
    { result: "q", value: 17 },
    { result: "r", value: 18 },
    { result: "s", value: 19 },
    { result: "t", value: 20 },
    { result: "u", value: 21 },
    { result: "v", value: 22 },
    { result: "w", value: 23 },
    { result: "x", value: 24 },
    { result: "y", value: 25 },
    { result: "z", value: 26 }
]

let rucksacks = (n: any, data: Array<string>) => {
    let result = new Array();
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
};

let total: number = 0;
data.map(o => {
    //console.log(o);
    let half = Math.ceil(o.length / 2);

    let first = o.slice(0, half);
    let second = o.slice(half);

    let intersect = Array.from(first).filter(ele => Array.from(second).includes(ele))[0];

    let num = (alpha.find(o => o.result == intersect)) ? Number(alpha.find(o => o.result == intersect)?.value)
        : Number(alpha.find(o => o.result.toLocaleUpperCase() == intersect)?.value) + 26;

    total += num;
});
console.log("Priority Sum:" + total);

let totalAuth: number = 0;
rucksacks(3, data).map(o => {
    let set1 = new Set(o[0]);
    let set2 = new Set(o[1]);
    let set3 = new Set(o[2]);

    let intersect = Array.from(new Set([...set1].filter(x => set2.has(x) && set3.has(x))))[0];
    
    let num = (alpha.find(o => o.result == intersect)) ? Number(alpha.find(o => o.result == intersect)?.value)
        : Number(alpha.find(o => o.result.toLocaleUpperCase() == intersect)?.value) + 26;

    totalAuth += num;
});
console.log("Rucksack Auth: " + totalAuth);