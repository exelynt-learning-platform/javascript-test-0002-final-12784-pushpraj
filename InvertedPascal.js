const totalRows = 5; // Total rows in our inverted pascal triangle

// We start from n = 4 (the 5th row of Pascal's triangle) and go down to 0
for (let n = totalRows - 1; n >= 0; n--) {
    let rowStr = " ".repeat((totalRows - 1 - n)); // Add leading alignment spaces
    let val = 1;

    for (let k = 0; k <= n; k++) {
        rowStr += val + " ";
        
        // Efficiently calculate the next binomial coefficient:
        val = val * (n - k) / (k + 1);
    }
    
    console.log(rowStr);
}
