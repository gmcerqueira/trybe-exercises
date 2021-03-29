const wakeUp = () => console.log("Acordando!!!");

const breakfast = () => console.log("Bora tomar café!!!");

const goToSleep = () => console.log("Partiu dormir!!!");

const doingThings = (action) => action();

doingThings(wakeUp);
doingThings(breakfast);
doingThings(goToSleep);
