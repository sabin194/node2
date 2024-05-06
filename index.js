console.log("Hello World");

const collegeName = "Texas"; // Define collegeName variable
const VALUE_OF_PI = 3.14;
console.log(collegeName.length);

const age=20;

const sum = 20 + 30
const isInCollege = true;

const studentprofile = [collegeName, age, isInCollege];

const studentObject ={
    collegeName: "Texas",
    age: 20,
    isIncollege: true,
    studentProfile: studentprofile
}




function printStudentAttribute() { 
    console.log("college", collegeName, "age", age);
    
}


console.log(studentObject.collegeName);
console.log(studentObject['age']);

for (let i = 0; i <3; i++) {
    printStudentAttribute();
    
}

for (let i of studentprofile) {
    console.log(i);
}

studentprofile.forEach((profileElement) => {
    console.log(profileElement);

})

function profileIterator(profileElement) {
    console.log(profileElement);
}
studentprofile.forEach(profileIterator);
console.log(studentprofile.filter(profileElement => profileElement === 20));

// console.log();
console.log(2 === "2");

console.log(undefined == undefined);

