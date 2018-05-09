Minimum
function min(low, high) {
    if (low < high) {
        return low;
    }
    else {
        return high;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

Recursion
function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

Bean Counting
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
  // → 4

/*  string[i] is "kakkerlak" and ch is "k", so if string[i] is equal to ch which is "k" then that mean counted will add 1.
    Its in a for loop and string.length; i++ will count how many "k" are in string which is kakkerlak"
*/  