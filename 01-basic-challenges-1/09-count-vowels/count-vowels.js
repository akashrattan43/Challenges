function countVowels(str) {
    const format = str.toLowerCase();
    let count = 0;

    for(let i = 0; i < format.length; i++) {
        const char = format[i]

        if (
            char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
        ) {
        count++;
        }
    }
    return count;
}


module.exports = countVowels;
