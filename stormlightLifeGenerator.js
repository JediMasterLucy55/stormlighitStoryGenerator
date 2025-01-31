console.log("Welcome!");

console.log("Your stormlight archive life randomized")
function generateStory() {
let rank = Math.floor(Math.random() * 4);

let origin = Math.floor(Math.random() * 4);

let radiantOrder = Math.floor(Math.random() * 9);

let buddy = Math.floor(Math.random() * 9);

console.log("You are a"); 

if (rank === 0) {
    console.log("surgeon");
} else if (rank === 1) {
    console.log("Parshendi");
} else if (rank === 2) {
    console.log("soldier");
} else if (rank === 3) {
    console.log("highprince");
}

console.log("from");

if (origin === 0) {
    console.log("a small town in Alethkar");
} else if (origin === 1) {
    console.log("Urithiru");
} else if (origin === 2) {
    console.log("Karbranth");
} else if (origin === 3) {
    console.log("a city in Jah Kaved");
}

console.log("You are a radiant; a(n)");

if (radiantOrder === 0) {
    console.log("Windrunner");
} else if (radiantOrder === 1) {
    console.log("Skybreaker");
} else if (radiantOrder === 2) {
    console.log("Dustbringer");
} else if (radiantOrder === 3) {
    console.log("Edgedancer");
} else if (radiantOrder === 4) {
    console.log("Truthwatcher");
} else if (radiantOrder === 5) {
    console.log("Lightweaver");
} else if (radiantOrder === 6) {
    console.log("Elsecaller");
} else if (radiantOrder === 7) {
    console.log("Willshaper");
} else if (radiantOrder === 8) {
    console.log("Stoneward");
} else if (radiantOrder === 9) {
    console.log("Bondsmith");
}

console.log("to be specific.");

console.log("One day, Dalinar Kholin sends you on a mission to Shinovar with")

if (buddy === 0) {
    console.log("Kaladin");
} else if (buddy === 1) {
    console.log("Shallan");
} else if (buddy === 2) {
    console.log("Adolin");
} else if (buddy === 3) {
    console.log("Jasnah");
} else if (buddy === 4) {
    console.log("Navani");
} else if (buddy === 5) {
    console.log("Wit");
} else if (buddy === 6) {
    console.log("Renarin");
} else if (buddy === 7) {
    console.log("Szeth");
} else if (buddy === 8) {
    console.log("Lift");
} else if (buddy === 9) {
    console.log("Venli");
} 

const training = "They help train you in your surges before y'all leave.";

if (buddy === 0 && radiantOrder === 0) {
    console.log(training);
} else if (buddy === 1 && radiantOrder === 5) {
    console.log(training);
} else if (buddy === 3 && radiantOrder === 6) {
    console.log(training);
} else if (buddy === 4 && radiantOrder === 9) {
    console.log(training);
} else if (buddy === 6 && radiantOrder === 4) {
    console.log(training);
} else if (buddy === 7 && radiantOrder === 2) {
    console.log(training);
} else if (buddy === 8 && radiantOrder === 3) {
    console.log(training);
} else if (buddy === 9 && radiantOrder === 7) {
    console.log(training);
} else if (buddy === 8 && radiantOrder === 8 || radiantOrder === 2) {
    console.log("Lift makes you make her some pancaked before y'all leave.");
} else if (buddy === 2) {
    console.log("Adolin makes you carry his clothes.");
} else if (buddy === 5) {
    console.log("Wit insults you before you leave.");
} else {
    console.log("Y'all prepare for you mission, grabbing some supplies"); 
} 
}
console.log("Part 2 coming soon"); 