// Q: 61
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles 
//using enums, and show one example.
//Explain & TIP: Enums are like special lists in your code that help you categorize things.
// They make your code cleaner and easier to understand.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Car);
var student = {
    name: "Yousra",
    age: 20,
    courses: ["Maths", "Stats", "English"]
};
console.log(student);
var circle = {
    kind: "circle",
    radius: 5
};
var rectangle = {
    kind: "rectangle",
    width: 10,
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
function combineStringAndNumber(text, number) {
    return text + number;
}
console.log(combineStringAndNumber("Age: ", 30));
//.........................................................................................................................
// Q 65:
// Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using
// the % sign. For example, remainder(5, 2) should give 1.
// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another.
// It's handy for figuring out if numbers are even, odd, and more.
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(5, 2));
