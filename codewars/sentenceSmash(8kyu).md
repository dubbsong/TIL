## squareSum.js

### ***problem***

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

<br>

### ***solution 01*** 

```javascript
function sentenceSmash(words) {
  return words.join(' ');
}
```

<br>

### ***solution 02***

```javascript
const sentenceSmash = words => words.join(' ');
```

<br>

### ***function call***

```javascript
sentenceSmash(['Wassup', 'bro?']);	// Wassup bro?
sentenceSmash(['Codewars']);	// Codewars
```

