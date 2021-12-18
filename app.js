class Casino {
    constructor(name) {
        this.name = name;
        this.timesPlayed = 0;
        // this.isFakeCoin = isFakeCoin;
    }

    playGame(betAmount, FakeCoin) {
        if (Math.random() > 0.5 || FakeCoin){
            console.log(this.name + "wins!");
            this.timesPlayed++;
        } else {
            console.log("You won " + betAmount * (this.timesPlayed + 1) + 
            " dollars from" + this.name + "!");
            this.timesPlayed++;
        }
    }

    rollDie(d) {
        console.log("You rolled a " +
            (Math.floor(Math.random() * d) +1) + "!")
    }
};
// TESTS

const myCasino = new Casino("BigTime Casino", False);

myCasino.playGame(5);
// console.log(myCasino);
myCasino.playGame(15);
// console.log(myCasino);
myCasino.playGame(25);
// console.log(myCasino);
myCasino.playGame(35);
// console.log(myCasino);
myCasino.rollDie(6);
myCasino.rollDie(10);
myCasino.rollDie(20);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
