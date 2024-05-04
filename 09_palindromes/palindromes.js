const palindromes = function (string) {
    strarr = Array.from(string.toLowerCase());
    processed = strarr.filter(c => c.match(/^[a-z0-9]+$/i));
    let flipped = processed.slice().reverse();
    return processed.toString() == flipped.toString();
};

// Do not edit below this line
module.exports = palindromes;
