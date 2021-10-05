

const age = 18;
const isfemale = true;
const driverStatus = "bob";
const myAge = 21;
const firstName = "Jan";
const totalAmount = 111;


if (age >= 18) {
    console.log("U  mag naar binnen, u bent ouder 18 jaar of ouder");
} else {
    console.log("U mag niet naar binnen, u bent jonger dan 18 jaar");
}

if (isfemale) {
    console.log("Vandaag is ladiesnight");
} else {
    console.log("Helaas vandaag is geen ladiesnight, tot de volgende keer")
}

if (driverStatus === "bob") {
    console.log("u mag rijden");
} else {
    console.log("u mag niet rijden");
}


if (myAge >= 18 && myAge <= 25) {
    console.log("Je krijgt 50% korting!");
}
else{
    console.log("Helaas je krijgt geen korting");
}

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("U krijgt gratis bier");
} else {
    console.log("U krijgt geen gratis bier");
}

if (totalAmount <= 25) {
    console.log("Helaas, u krijgt geen(vega)bitterballen");
} else if (totalAmount > 25 && totalAmount <= 50) {
    console.log("U krijgt een gratis (vega)bitterballen");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("U krijgt een gratis portie nachos");
}
else {
    console.log("U krijgt een gratis fles champagne");
}
