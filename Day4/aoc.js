import * as fs from 'fs';
const text = fs.readFileSync("./Day4/input.txt");
const data = text.toString('utf-8').split("\n");
let total = 0;
let partial = 0;
data.map(o => {
    let min1 = Number(o.substring(0, o.indexOf('-')));
    let max1 = Number(o.substring(o.indexOf('-') + 1, o.indexOf(',')));
    let min2 = Number(o.substring(o.indexOf(',') + 1, o.lastIndexOf('-')));
    let max2 = Number(o.substring(o.lastIndexOf('-') + 1));
    if ((min1 >= min2 && max1 <= max2) || (min2 >= min1 && max2 <= max1))
        total += 1; //full overlap
    //18-96,4-29
    if ((min2 >= min1 && min2 <= max1)
        || (max2 >= min1 && max2 <= max1)
        || (min1 >= min2 && min1 <= max2)
        || (max1 >= min2 && max1 <= max2))
        partial += 1;
});
console.log(data.length);
console.log("Fully contained range: " + total);
console.log("Partial range: " + partial);
