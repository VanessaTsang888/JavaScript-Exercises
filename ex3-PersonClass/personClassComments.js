/* 

Using JavaScript create a Person class containing the attributes: name and age:

Create a method in the Person class which returns how another person's age compares.

Given the instances p1, p2, and p3, which will be initialised with the attributes name and age. Return a sentence in the following format:
{ other person name } is { older than / younger than / the same age as } me.

p1 = Person( "Samuel", 24 )
p2 = Person( "Joel", 36 )
p3 Person( "Samuel", 24 )

p1.compareAge(p2) -> " Joel is older than me. "
p2.compareAge(p1) -> " Samuel is younger than me. "
p1.compareAge(p3) -> " Lily is the same age as me. "

Though should be given to:
	1. A new user visiting your repository - how would they know how to clone and run your code?
	2. Prevention of committing of secrets and IDE artefacts to your repo.
	3. Speed of algorithm.
	4. Display output
	5. Protecting your own personal info e.g. birthdates, photos etc.

*/

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
// Unit tests to compare ages, same age, younger than, and older than. Better if its was done in jest.
// Sam:
let sam = new Person ("Samuel", 24);
// Joel:
let joel = new Person ("Joel", 36);
// Lily:
let lilly = new Person ("Lilly", 24);

// Display results of comparing age 
console.log(sam.compareAge(joel));
console.log(sam.compareAge(lilly));
console.log(joel.compareAge(lilly));






















