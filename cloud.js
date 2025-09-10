function Palindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(Palindrome("cat"));
console.log(Palindrome("cattac"));




function findTheShortestWord(sentence) {
  const words = sentence.split(/\s+/).filter(word => word.length > 0);
  
  let shortestWord = words[0];
  for (const word of words) {
    if (word.length < shortestWord.length) {
     return shortestWord = word;
    }
  }
}
console.log(findTheShortestWord("Rabbits are small"))



function createPhoneNumber(number) {
    var line = "(xxx) xxx-xxx" 

for (let i = 0; i < number.length; i++) {

  line = line.replace("x", number[i]); 
}    
    return line
   }

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))




function numero(arr) {

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

return { min, max };
}

console.log(numero([2, 3, 5, 8, 9]))



function ascendingNumbers (arr) {
    return arr.sort((a, b) => a - b);
}

const numer = [5, 8, 1, 4, 7, 2];
const sorted = ascendingNumbers(numer);

console.log(sorted)






function hasEvenNumber(arr) {
	let foundEven = false;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			foundEven = true;
		} else if (arr[i] % 2 !== 0) {
			foundEven = false;
		}
	}
	return foundEven;
}

console.log(hasEvenNumber([1, 3, 4, 5])); 
