// 1. NOTE adding arrays with old javascript rule:
const ages1 = [12, 23, 54, 23];
const ages2 = [15, 16, 14, 17];
const ages3 = [16, 14, 12, 11];
const addingAges = ages1.concat(ages2).concat([5]).concat(ages3);
console.log(addingAges);

// ~ NOTE adding arrays with ES6 (spread operator (...) ):
const ages01 = [12, 23, 54, 23];
const ages02 = [15, 16, 14, 17];
const ages03 = [16, 14, 12, 11];
const addingAges2 = [...ages01, ...ages02, 5, ...ages03];   //NOTE (...) this three dots are spreading out the values of (ages01,ages02,ages03). 
console.log(addingAges2);

// 2. NOTE getting max out of an array (spread out & Math.max):
const findMax = [650, 450, 440];
const maxOfThem = Math.max(...findMax); //NOTE (...) this three dots are spreading out the value of findMax array!
// NOTE বাংলা ভাবে বল্লে, (...) এই three_dot কোন একটি array এর value দিয়ে দেয়।
console.log(maxOfThem);