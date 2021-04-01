// The Class declarationor - blueprint (using OOP): A person with their attributes. Its an Template not object:
class Person {

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    // Method to compare age: the function I'm calling is compareAge:
    compareAge(aPerson) {
        // 
        let otherAge = aPerson.getAge(); // Get other person's age
        let otherName = aPerson.getName(); // Get other person's name
        let myAge = this.age; // Get my age
        let myName = this.name; // Get my name
        // Checking my age with other person's age
        if (myAge === otherAge ) {
            return otherName +  " is the same age as " + myName; // returning ages are the same
        } else if (myAge > otherAge ) {
            return otherName +  " is younger than " + myName; // returning the other person is yonger than me
        } else {
            return otherName +  " is older than " + myName; // returning the other person is older than me
        }

    // Methods to get age and name:
    getAge() {
        return this.age;
    }

    getName() {
        return this.name;
    }
}
// Create Person objects:
let sam = new Person ("Samuel", 24);
let joel = new Person ("Joel", 36);
let lilly = new Person ("Lilly", 24);

// Display results of comparing age 
console.log(sam.compareAge(joel));
console.log(sam.compareAge(lilly));
console.log(joel.compareAge(lilly));






















