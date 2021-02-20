// NOTE adding two class:
class parent{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}
class child extends parent{                 //NOTE connecting parent class by, | extends parent |.
    constructor(name){
        super();                            //NOTE calling upper class named("parent") by, super().
        this.ChildName = name;
    }
}
const baby1 = new child('tom');
const baby2 = new child('Amnol')
console.log(baby1, baby2);


// adding full name by function and super class:
class parent{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}
class child extends parent{
    constructor(name){
        super();
        this.ChildName = name;
    }
    getFullName(){                        //NOTE can write a function inside of a class but no need to declared ("function") before function name.  
        return this.ChildName + " " + this.fatherName; //NOTE can return the value, which is presented out of the function but inside of class or upper class.
    }
}
const baby1 = new child('tom');
const baby2 = new child('Arnold');
console.log(baby1.getFullName(), baby2.getFullName()); //NOTE calling the full name of baby1 & baby2 using function.

// again try:
class parent{
    constructor(){
        this.fatherName = "bin osman";
    }
}
class child extends parent{
    constructor (name){
        super();
        this.childName = name;
    }
    getFullName(){
        return this.childName + ' ' + this.fatherName;
    }
}
const baby01 = new child('Saif');
const baby02 = new child('Fahim');
console.log(baby01.getFullName(), baby02.getFullName());