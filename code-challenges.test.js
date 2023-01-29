// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("peopleSentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]

    expect(peopleSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// peopleSentence
// ReferenceError: peopleSentence is not defined


// b) Create the function that makes the test pass.
// Pseudocode
// input: object
// output: an array of objects and returns an array with a sentence about each person with their name capitalized.
// process: I will first map through the array. Then I will set variables to the values of the object. Next I will split the items of the name value, so that I can capitalize the first letter of the first name and last name. Last I will use string interpolation to form the sentence.

const peopleSentence = (array) => {
  return array.map((object) => {
    let name = object.name
    let occupation = object.occupation
    let nameArray = name.split(" ")
    let firstName = nameArray[0][0].toUpperCase() + nameArray[0].slice[1]
    let lastName = nameArray[1][0].toUpperCase() + nameArray[1].slice[1]
    return '${firstName} ${lastName} is ${occupation}.'
  })
}

// GREEN - Success!
// PASS  ./code-challenges.test.js
// peopleSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("numRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect(numRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// numRemainders
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (2 ms)

// b) Create the function that makes the test pass.
// Pseudocode
// input: a mixed data array
// output: an array of only the remainders of the numbers when divided by 3
// process: I will create a function called numRemainders. Then I will filter the array using typeof. Last I will use map to get the remainders of the numbers when divided by 3.

const numRemainders = (array) => {
  return array.filter(item => typeof item === "number").map(num => num % 3)
}

// PASS  ./code-challenges.test.js
// numRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (2 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubedSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// cubedSum
//     ✕ takes in an array of numbers and returns the sum of all the numbers cubed. (2 ms)

// b) Create the function that makes the test pass.
// Pseudocode
// input: array
// output: the sum of all the numbers cubed
// process: I will create a function called cubedSum. I will first create a variable sum that is equal to 0. Then I will use map to add the cubed numbers together, and last return the sum.

const cubedSum = (array) => {
  let sum = 0
  array.map(num => sum += num**3);
  return sum
}
