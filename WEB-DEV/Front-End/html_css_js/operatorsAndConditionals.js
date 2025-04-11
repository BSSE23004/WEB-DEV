// let a = 5
// let b = '5';

// console.log(a === b);//Strict equality check Both value and datatype so its answer is (false)

// console.log(a == b);//Loose equality check only value not datatype so its answer is (true)

// console.log(a != b);//(false)
// console.log(a !== b);//(true)

// let c = (a == b) ? 100 : 0;
// console.log(c);//100

//----------------------------------Working of logical operators with non-booleans-----------------------------------------------------------

//-----------falsey
//i)undefined
//ii)null
//iii)0
//iv)false
//v)NaN
//vi)""

//----------------------------truthy
//Anything which is not falsey
if ("Ibrahim" && "Sabun") {
    console.log("It is printing");
}
//Short Circuiting(When logical operators found any condtion that give their answer they stop looking forward for any condition)
//for example
console.log(false || false || "Ibrahim" || "Hehe" || "Not gonna print ")//Ibrahim is the answer because there was no logic to look forward
console.log(true && true && 0 && "Ibrahim");//0 is the answer because it was false and there was no reason to look forward


//----------------------------------------------BitWise operators------------------------------------------------------------------------------

console.log(2 | 5)//7 because if we do bitwise or b/w 0010 and 0101 we get 0111 which is = 7
console.log(2 & 5)//0 because if we do bitwise and b/w 0010 and 0101 we get 0000 which is = 0
console.log(~(0))//-1 because if we do bitwise not of 0000 it will be 1111 now because MSB is 1 so number is -ive
//now take its 2's compliment which = 1's comp + 1; = 0000 + 1 = 0001 = 1 so ans is one and the number
//was -ive so that is why answer is -1
//so basically bitwise not(~) perform 1's compliment

console.log(3 ^ 5)//6 because if we do XOR between 0011 and 0101 it gives 0110 = 6
console.log(2 ^ 2)//0 because if we do XOR b/w 0010 and 0010 it will give 0000

console.log(10 << 1)//20 because when we left shift 001010 by 1 it gives 010100 = 20  
console.log(10 >> 1)//5 because when we right shift 001010 by 1 it gives 000101 = 5

//so basically when we left shift 1 time it multiply the number by 2
// when we right shift 1 time it divides the number by 2


