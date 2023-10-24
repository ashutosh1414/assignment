function reverseWord(word) {
    return word.split('').reverse().join('');
}


function reverseSentence(sentence) {
    // for spliting the word
    const words = sentence.split(' ');

    // Reversing and reseting in array
    const reversedWords = words.map(reverseWord);

    
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

//input
const userInput = prompt("Enter a sentence:");


if (userInput) {
    const reversed = reverseSentence(userInput);
    console.log("Reversed Sentence: " + reversed);
} else {
    console.log("No input provided.");
}