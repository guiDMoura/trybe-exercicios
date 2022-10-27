const longestWord = (text) => {
    const phrase = text.split(' ');
    longestLength = 0;
    longest = '';
    for(const word of phrase) {
        if (word.length > longestLength) {
            longestLength = word.length;
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));