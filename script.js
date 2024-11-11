function cmSquareToCost(l, b) {
    const unitSqftPrice = 2150;
    let cmSquare = l * b;
    let sqft = cmSquare * 0.00107639;
    return sqft * unitSqftPrice;
}
let dadRoomExtra = cmSquareToCost(314, 442) - cmSquareToCost(314, 370);
let firstFloorRoom = cmSquareToCost(314, 466) - cmSquareToCost(314, 442);
let firstFloorHallExtraLess = cmSquareToCost((466 + 165 - 120 - 418), 428);
let sitout = cmSquareToCost(180, 436);
let tableSpaceExtra = cmSquareToCost((314 + 428), 30);
let intialCost = 2150 * (1209 + 782);
let final = intialCost + dadRoomExtra - firstFloorRoom - firstFloorHallExtraLess + sitout + tableSpaceExtra;
debugger;



