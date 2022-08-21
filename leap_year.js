let year = 2024;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        console.log(year + " is not a Leap year");
        if (year % 400 === 0) {
            console.log(year + " is Leap year");
        } else {
            console.log(year + " is not a Leap year");
        }
    } else {
        console.log(year + " is Leap year");
    }
} else {
    console.log(year + " is not a Leap year");
}