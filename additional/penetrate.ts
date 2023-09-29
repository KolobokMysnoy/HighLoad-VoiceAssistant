let regions: string = `40 240 256
28 683 247
16 645 802
16 642 052
13 867 347
12 259 126
10 205 730
7 903 864`;

let persInRF = 146447424;
let internetPenetrate = 0.88;
let internetPersons = persInRF * internetPenetrate;

console.log("Internet users", internetPersons);

let alicePenetrate = 57000000/(internetPersons);
let penetrate = internetPenetrate * alicePenetrate;

console.log("PEN", penetrate);
let regionsSplit: string[] = regions.split('\n');;
let regionNumber = regionsSplit.map((cr) => {
    // @ts-ignore
    return Number(cr.replaceAll(" ", ""));
})

for (let i in regionNumber) {
    console.log(regionNumber[i] * penetrate / 1000);
}

console.log("In all regions", regionNumber.reduce((acc, cr) => acc+= cr* penetrate , 0))