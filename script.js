console.log("Hello World");
/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log(isAdult(5));

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
const isCharAVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

console.log('my solve:', isCharAVowel("b"));

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail = (name, domain) => {
    return name + '@' + domain;
}

console.log('my solve:', generateEmail("alromaihi", "msr.com"));

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


const greetUser = (name, timeOfDay) => {
    return "Good " + timeOfDay + ", " + name + "!";
}

console.log('my solve:', greetUser("mohamed", "morning"));

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
const maxOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}

console.log('my solve:', maxOfThree(9, 1999, 78));


console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (billAmount, tipPercentage) => {
    return (billAmount * tipPercentage) / 100;
}
console.log('my solve:', calculateTip(75, 3));


console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
const convertTemperature = (temperature, scale) => {
    if (scale.toUpperCase() === 'C') {
        return (temperature * 9/5) + 32;
    } else if (scale.toUpperCase() === 'F') {
        return (temperature - 32) * 5/9;
    } 
}

console.log('my solve:', convertTemperature(89.6, "F"));
console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator2 = (num1, num2, opraition) => {
    if(opraition === 'add') {
        return num1 + num2;
    }
    else if(opraition === 'subtract') {
        return num1 -num2;
    }
    else if(opraition === 'multiply') {
             return num1 * num2;
    }
    else if(opraition === 'dvide') {
        return num1 / num2;
    }
    else {
        return 'invalid operation';
    }
} 
    console.log('my solve:', basicCalculator2 (9098097809, 898676, "multiply" ));
    
    console.log('Exercise 9 Result:', basicCalculator2(10, 5, "subtract"));


/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('my solve:', calculateGrade(12));

console.log('Exercise 10 Result:', calculateGrade(85));



       /*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/

const createUsername = (firstName, lastName) => {
    const firstThreeFirstName = firstName.slice(0, 3);
    const firstThreeLastName = lastName.slice(0, 3);
    const fullNameLength = firstName.length + lastName.length;
    return firstThreeFirstName + firstThreeLastName + fullNameLength;
}


console .log('my solve:', createUsername("mohamed", "alromaihi"));

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {
    return args.length;
}

console.log('my solve:', numArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));