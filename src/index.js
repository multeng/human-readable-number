module.exports = function toReadable(number) {
    let words = {
        0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
        11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
        30: "thirty", 40: "fourty", 50: "fivety", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
    }
    let decimals = {
        1: "ten", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"
    }
    let result = '';
    let simple = number % 10;
    let decimal = Math.floor(number / 10) % 10;
    let hundred = Math.floor(number / 100) % 10;
    if (number.toString().length > 2) {
        result += words[hundred] + ' hundred ';
        if (decimal == 1) {
            result += words[number % 100];
        } else {
            if (decimal == 0) {
                result += "";
            } else {
                result += decimals[decimal] + ' ';
            }
            if (simple == 0) {
                result = result.slice(0, -1);
            } else {
                result += words[simple];
            }
        }
        return result;
    }
    if (number.toString().length > 1) {
        if (decimal == 1) {
            result += words[number % 100];
        } else {
            result += decimals[decimal] + ' ';
            if (simple == 0) {
                result = result.slice(0, -1);
            } else {
                result += words[simple];
            }
        }
        return result;
    }
    if (number.toString().length = 1) {
        result += words[simple];
        return result;
    }
}