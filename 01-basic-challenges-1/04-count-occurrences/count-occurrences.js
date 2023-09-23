function countOccurrences(words, char) {
    let count = 0;
    for(let i = 0; i < words.length; i++) {
        if(words[i] === char){
            count++;
        }
    }
    return count;
}

module.exports = countOccurrences;
