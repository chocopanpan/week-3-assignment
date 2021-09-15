// let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//     num1 = 3;
//     num2 = 93;
//     difference = num2 - num1;
// console.log(difference);
// ages.push(12);
// console.log(ages);
// total = 0;
// for (let i = 0; i < ages.length; i++){
//     total += ages[i];
// }
// avg = total / ages.length;
// console.log(avg);

// let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
// let lengths = names.map(function(name){
//     return name.length;
// });
// console.log(lengths);
// let sum = lengths.reduce(function(previousValue, currentValue){
//     return previousValue + currentValue;
// });
// console.log(sum);
// let average = sum / names.length;
// console.log(average);

// array.[array.length - 1];

// array[0];

// let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
// for (let i = 0; i < names.length; i++){
//     namesLength = names[i];
//     console.log(namesLength.length);
// }

// let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
// let total = 0;
// for (let i = 0; i < names.length; i++){
//     namesLength = names[i];
//     total += namesLength.length;
// }
// console.log(total);

// function combo(word, num){
//     if (num > 0){
//     return word + word.repeat(num - 1)}
// }
// console.log(combo("Hello", 3));
// function fullName(firstName, lastName){
//     return firstName + " " + lastName;
// }
// console.log(fullName("Freddie", "Mercury"));

// let array = [2, 5, 3, 5];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// function sum(array){
//     if (array.reduce(reducer) > 100){
//         return true;
//     }
    
// }
// console.log(sum(array));
// function average(array){
// let reducer = (accumulator, currentValue) => accumulator + currentValue;
// let avg = (array.reduce(reducer) / array.length);
// return avg;
// }
// console.log(average([54, 21, 1]));

// function twoArrays(array1, array2){
//     let total = 0;
//     for (let i = 0; i < array1.length; i++)
//      {total+= array1[i];
// }

// function twoArrays(array1, array2){
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// let average1 = array1.reduce(reducer) / array1.length;
// let average2 = array2.reduce(reducer) / array2.length;
// if (average1 > average2){
//     return true;
// }
// }
// console.log(twoArrays([5, 5, 7], [6, 1, 6, 32]));

// function willBuyDrink(weather, moneyInPocket){
//     if (moneyInPocket > 10.50 && weather === "isHotOutside")
//     {return true}
// }
// console.log(willBuyDrink("isHotOutside", 11));

// //Program will tell you what kind of card you drew from a deck of cards.  Just the kind, so if it's a Heart, Club, Diamond, etc.//
// function drawACard(kind){
//    if (kind == 1) {
//        return "Spade";
//    } else if (kind == 2) {
//        return "Heart";
//    } else if (kind == 3) {
//        return "Club";
//    } else {
//        return "Diamond";
//    }
// }
// console.log("I drew a" + " " + drawACard(2) + "!");