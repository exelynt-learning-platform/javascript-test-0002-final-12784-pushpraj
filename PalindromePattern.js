const PATTERN_HEIGHT = 5;

for (let i = 1; i <= PATTERN_HEIGHT; i++) {
    let row = "";

    for (let j = i; j < PATTERN_HEIGHT; j++) {
        row += "  ";
    }

    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    for (let j = i - 1; j >= 1; j--) {
        row += j + " ";
    }

    console.log(row);
}
