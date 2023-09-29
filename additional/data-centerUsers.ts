let users = `15 662
5 397 
15 935
9 554 
10 449`;

let mounthReq = 58;
let mounthTime = 30 * 24 * 3600;
let mounthToRps = mounthReq / mounthTime;

let dataSplit: string[] = users.split('\n');;
let dataNumbers = dataSplit.map((cr) => {
    // @ts-ignore
    return Number(cr.replaceAll(" ", "")) * 1000;
})

for (let i in dataNumbers) {
    let rps = dataNumbers[i] * mounthToRps
    console.log("RPS", rps);
    console.log("Pick RPS", rps * 3);
}
