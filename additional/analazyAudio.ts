const answerTime = 22.5;
const userSpeechTime = 7.5;

const processTimeSpeech = 464;
const processAudio = 224;

class RpsDC {
    rps: number;
    name: string;

    constructor(name1: string, rps: number) {
        this.name = name1;
        this.rps = rps;
    }
}


let RPS = [
    new RpsDC("MSK", 1051),
    new RpsDC("Sankt", 362),
    new RpsDC("Ekb", 1069),
    new RpsDC("Hab", 641),
    new RpsDC("Kras", 701),
];

function audioToTextCons() {
    RPS.forEach((val) => {
        console.log(val.name);
        let secondsToWork = 0;

        let sum = 0;
        for (let i = 1; i < Math.round(userSpeechTime); i++) {
            sum += i;
        }
        // 1 + 2 + 3 + 4 + 5 +6 +7
        secondsToWork = sum * val.rps;
        console.log("Seconds to work: ", secondsToWork);

        let workMachines = secondsToWork / processAudio;
        console.log("Work machines: ", workMachines);
        console.log("Need memory(GB): ", workMachines * 20);
        console.log("Need cores: ", workMachines * 2851);
        console.log("Count: ", workMachines > workMachines * 2851 / 8192 ? workMachines : workMachines * 2851 / 8192);
    })
}

function textToAudio() {
    RPS.forEach((val) => {
        console.log(val.name);
        let secondsToWork = val.rps * answerTime;

        console.log("Seconds to work: ", secondsToWork);

        let workMachines = secondsToWork / processTimeSpeech;

        console.log("Work machines: ", workMachines);
    })
}

textToAudio();