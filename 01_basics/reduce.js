function longerWord(a, b) {
    if(a.length > b.length) {
        return a;
    }   else {
        return b;
    }
}

const sentence = 'Hey there what are you doing this saturday night';

const longest = sentence.split(' ').reduce(longerWord);

console.log(longest);