// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const hqStreet=42;
    return Math.abs(someValue -hqStreet);
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Get the number of blocks
    const feetPerBlock = 264; // Each block is 264 feet
    return blocks * feetPerBlock; // Multiply blocks by feet per block to get the distance in feet
}


  
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination); // Calculate blocks travelled
    const feetPerBlock = 264; // Each block is 264 feet
    return blocksTravelled * feetPerBlock; // Convert blocks travelled to feet
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Get the distance travelled in feet

    if (distance <= 400) {
        return 0; // The first 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // Charge 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Error for distances over 2500 feet
    }
}

