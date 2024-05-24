let  apple = "apple";
let uppercaseApple = "App;e";
let ten = 10;
let twenty=20;
console.log("Is apple is equale to apple?");
console.log(apple == "apple");

console.log("is apple is not equale to apple?");
console.log(apple != "apple");
//test using Lowercase function
console.log("Is pple is equl to apple fter converting to lowercse");
console.log(uppercaseApple.toLowerCase() == "apple" );

console.log("\nIs APPLE is  not equal to apple after converting to Lowrcase?");
console.log(uppercaseApple.toLowerCase()  != "apple");

//numarical
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

console.log("]nIs ten is not equal to twenty?");
console.log(ten != twenty);

console.log("\nIs ten is greater then zero?");
console.log(ten > 0);

console.log("\nIs ten is  geater hen or equal to 5?");
console.log(ten >= 5);
//less then or equal to

console.log("\ntwenty Is less then or equal to 10");
console.log(twenty <= 10);
//test using "and" & "or" operators
console.log("\n twenty is not equal to 10 and twenty is greater then  10");
console.log(twenty != 10 && twenty > 30);
//using || (or)
console.log("\n 20 is greater then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);