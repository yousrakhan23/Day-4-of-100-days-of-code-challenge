
// Q: 61

// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles 
//using enums, and show one example.

//Explain & TIP: Enums are like special lists in your code that help you categorize things.
// They make your code cleaner and easier to understand.

enum VehicleType {
    Car , 
    Truck , 
    Motorcycle
}
console.log(VehicleType.Car)

//........................................................................................................................


// Q 62:

// Making a Student Template: Create a blueprint for student information, including their name, 
//age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same 
//kind of information, making your code more organized

interface Student {
    name: string;
    age: number;
    courses: string[];
}
let student : Student = {
    name: "Yousra",
    age: 20,
    courses: ["Maths" , "Stats" , "English"]
};
console.log(student);

//................................................................................................................................

// Q 63: 

// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
// properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex 
//information, such as the details of different shapes.


type Shape = {
    kind: "circle" | "rectangle" ;
    radius?: number ;
    width?: number ; 
    height?: number ;
};
let circle : Shape = {
    kind: "circle" ,
    radius: 5
};
let rectangle : Shape = {
    kind: "rectangle" , 
    width: 10 , 
    height: 20
};
console.log(circle);
console.log(rectangle);

// ........................................................................................................................

// Q 64:

//Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, 
//if provided with "Age: " and 30, it should give back "Age: 30".

// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings.
// Mixing a string with a number changes the number into a string for the joining.


function combineStringAndNumber (text:string , number:number ) : string {
    return text + number ; 
}

console.log(combineStringAndNumber("Age: " , 30));

//.........................................................................................................................

// Q 65:

// Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using
// the % sign. For example, remainder(5, 2) should give 1.

// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another.
// It's handy for figuring out if numbers are even, odd, and more.

function remainder (num1 : number , num2 : number): number {
    return num1 % num2 ; 
}
console.log(remainder(5 , 2));

