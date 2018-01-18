/*
Write a method smash
that takes an array of words
and smashes them together
into a sentence
and returns the sentence.

You can ignore any need to sanitize words
or add punctuation,
but you should add spaces
between each word.
Be careful,
there shouldn't be a space
at the beginning or the end of the sentence.
*/


// solution 01
function sentenceSmash(words) {
    return words.join(' ');
}


// solution 02
const sentenceSmash = words => words.join(' ');


console.log(sentenceSmash(['Wassup', 'bro?']));  // Wassup bro?
console.log(sentenceSmash(['Codewars']));  // Codewars

