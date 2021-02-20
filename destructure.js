// NOTE topic = object deStructuring:
const person = { name: "Jack william", age: 42, gf: 'Emma Watson', job: 'FaceBooking', friends: ["tom Hanks", "jhankar Mahbub", "Mark Zuckerberg", "X Æ A-Xii"] };
// NOTE we can access or deStructure the property_value of object in many ways:
// NOTE rule1:
console.log(person.gf); //NOTE gf is property;
// NOTE rule2:
const gf = person.gf;
console.log(gf);
// NOTE rule3:
const { gf } = person;
console.log(gf);
// NOTE we can access many property_value of an object:
const {gf, name} = person;
console.log(gf, name);

// NOTE topic = array deStructuring:
const myFriends = ['amir khan', 'salman khan', 'sharukh khan', 'sakib khan'];
const [firstFriend] = myFriends;    //NOTE firstFriend will catch the fist position of an array.
const [...restFriend] = myFriends;  //NOTE rstFriend Will catch the rest of the element / property of array. because of (...) "three dot".
console.log(firstFriend);
console.log(restFriend);

// NOTE topic = deStructuring a complexObject :
const complexObject = {
    name: 'jalil',
    info: {
        address: 'jatrabari',
        leader: 'jummon ChairMan',
    }
}
const {leader} = complexObject.info;
console.log(leader);