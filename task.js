function loop() {
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzzBiff");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 7 === 0 && i % 3 === 0) {
            console.log("FizzBiff");
        } else if (i % 7 === 0 && i % 5 === 0) {
            console.log("BuzzBiff");
        } else if (i % 9 === 0) {
            console.log("Fizz");
        } else if (i % 7 === 0) {
            console.log("Fuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Biff");
        } else {
            console.log(i);
        }
    }
}

loop();
