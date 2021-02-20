class student{                                  // 1. NOTE class is like a class room where all the student have some common values. like same dress,
                                                //         almost same age, and so on. it's like an array. and it will return the id and other values.
    constructor(sId, sName){                    // 2. NOTE constructor like a function.
        this.Name = sName;                      // 3. NOTE this is the specific value for each student.
        this.id = sId;                          // ~  NOTE ঐ
        this.school = "A.K.High_School";        // 4. NOTE this is the common value for all student. and it's school name is not present inside constructor.
    }
}
const student1 = new student(12, 'Suvho');      // 5. TODO new should be added to invoked class constructor.
const student2 = new student(14, 'Faruk');      // ~  TODO ঐ
console.log(student1, student2);
console.log(student1.Name);                     // 6. NOTE accessing the specific value of student1.

// again try:
class PolaPan{
    constructor(pId, pName, pAge){
        this.name = pName;
        this.age = pAge;
        this.id = pId;
        this.area = "kutub_Khali"
    }
}
const picchi1 = new PolaPan(123, 'faruk', 12);
const picchi2 = new PolaPan(232, 'maruf', 15);
const picchi3 = new PolaPan(534, 'sakib', 16);
console.log(picchi1, picchi2, picchi3);