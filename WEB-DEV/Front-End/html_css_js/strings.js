let intro = `Name:Ibrahim
Age:19
Study:BSSE
Institution:ITU
Course:WEB-Dev
`

let hobby = `Hobby:Coding
`

console.log(intro);//Output is same as above this string is known as (backticks) string
console.log(intro.toUpperCase()); 
console.log(intro.toLowerCase());
console.log(intro + hobby);
let concatination = `${intro}${hobby}Phone:0321-6160617`
console.log(concatination);
console.log("\nLength of intro = " + intro.length);
console.log(intro.substring(13, 20));
console.log("\n" + intro.substring(47));

let words = intro.split("\n");
console.log(words);

console.log(words.join(" "));