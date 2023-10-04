var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 3] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var rkSeat = seatChoice.AISLE;
