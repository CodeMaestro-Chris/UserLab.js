// Imports arrays from data.json file
const data = require("./data.json"); 


/**
 * An array of Nouns imported from data.json file
 */
const userNouns = data.Nouns;  // Reads the items in noun array from data.json file

/**
 * An array of Adjectives imported from data.json file
 */
const userAdjectives = data.Adjectives;  // Reads the items in adjective array from data.json file

/**
 * An array of Professions imported from data.json file
 */
 const userProfessions = data.Professions;  // Reads the items in profession array from data.json file

/**
 * An array of numbers from 1-100
 */
const numberArray = Array.from({ length: 100}, (_, i) => i + 1);  // An array of numbers from 1 to 100

/**
 * An array of numbers from 1-20
 */
const numberArrayTo20 = Array.from({ length: 20 }, (_, i) => i + 1); // An array of numbers from 1 to 20

/**
 * An array of even numbers from 2-100
 */
const evenNumbers = Array.from({ length: 50 }, (_, i) => i * 2 + 2); // An array of even

/**
 * An array of odd numbers from 1-100
 */
const oddNumbers = numberArray.filter(number => number % 2 !== 0); // An array of odd numbers


/**
 * Creates a Username consisting of an adjective, a noun, a number (from 1-100) and another number (from 1-20)
 * 
 * @returns {string} Concatenates username and returns it as a string
 */
function generateRandomName() { 
    /**
     * Picks a random adjective from the array of adjectives
    */
    const randomAdjective = userAdjectives[Math.floor(Math.random() * userAdjectives.length)];

    /**
     * Picks a random noun from the array of nouns
    */
    const randomNoun = userNouns[Math.floor(Math.random() * userNouns.length)];

    /**
     * Picks a random number from the array of numbers from 1-100
    */
    const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];  

    /**
     * Picks a random number from the array of numbers from 1-20
    */
    const randomNumberTo20 = numberArrayTo20[Math.floor(Math.random() * numberArrayTo20.length)];

    // Generates a random username by concatenating the random adjective, noun, number (1-100) and another number (1-20)
    return `${randomAdjective}_${randomNoun}${randomNumber}${randomNumberTo20}`;
}


/**
 * Creates a Username consisting of an string "User", a random number(1-100), even number (from 2-100) and odd number (from 1-100)
 * 
 * @returns {string} Concatenates the username and returns it as a string
 */
function generateRandomUser() {
    /**
     * Picks a random number from the array of numbers from 1-100
    */
    const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];  

    /**
     * Picks a random even number from the array of even numbers
    */
    const randomEvenNumber = evenNumbers[Math.floor(Math.random() * evenNumbers.length)];

    /**
     * Picks a random odd number from the array of odd numbers
    */
    const randomOddNumber = oddNumbers[Math.floor(Math.random() * oddNumbers.length)];

    // Generates a username that starts with "user" and ends with random numbers
    return `User${randomNumber}${randomEvenNumber}${randomOddNumber}`;
}

/**
 * Creates a Username consisting of an adjective and a noun
 * 
 * @returns {string} Concatenates username and returns it as a string
 */
function generateFormalName() {
    /**
     * Picks a random noun from the array of nouns
    */
    const randomNoun = userNouns[Math.floor(Math.random() * userNouns.length)];

    /**
     * Picks a random adjective from the array of adjectives
    */
    const randomAdjective = userAdjectives[Math.floor(Math.random() * userAdjectives.length)];

     // Return a random username consisting of an adjective and a noun
    return `${randomAdjective}_${randomNoun}`;
}



/**
 * Creates a Username consisting of an adjective and a profession
 * 
 * @returns {string} Concatenates username and returns it as a string
 */
function generateProName() {
    /**
     * Picks a random adjective from the array of adjectives
    */
    const randomAdjective = userAdjectives[Math.floor(Math.random() * userAdjectives.length)];
    
    /**
     * Picks a random profession from the array of professions
    */
    const randomProfession = userProfessions[Math.floor(Math.random() * userProfessions.length)];
    
    // Return a random username consisting of an adjective and a profession
    return `${randomAdjective}_${randomProfession}`;
}

/**
 * Creates a Username consisting of an adjective, a profession, a number(1-100) and another number(1-20)
 * 
 * @returns {string} Concatenates username and returns it as a string
 */
function generateUniquePro() {
    /**
     * Picks a random adjective from the array of adjectives
    */
    const randomAdjective = userAdjectives[Math.floor(Math.random() * userAdjectives.length)];
    
    /**
     * Picks a random profession from the array of professions
    */
    const randomProfession = userProfessions[Math.floor(Math.random() * userProfessions.length)];

    /**
     * Picks a random number from the array of numbers from 1-100
    */
    const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];  

    /**
     * Picks a random number from the array of numbers from 1-20
    */
    const randomNumberTo20 = numberArrayTo20[Math.floor(Math.random() * numberArrayTo20.length)];
    
    // Return a random username consisting of a random adjective, a profession, number (1-100) and another number (1-20)
    return `${randomAdjective}_${randomProfession}${randomNumber}${randomNumberTo20}`;
}
    

/**
 * Ensures that the generated username is not already in use
 * 
 * @param {string} username - The generated username
 * 
 * @returns {string} Concatenates the username and returns it as a string
 */
    function generateUniqueUsername(username) {
        /** 
         * An array of usernames already existing
        */
        const existingUsernames = [...userNouns,...userAdjectives,...numberArray,...numberArrayTo20,...oddNumbers,...evenNumbers, "User"];
        if (existingUsernames.includes(username)) {

            return 
                generateUniqueUsername(generateRandomName()); // If the username is already taken, generate a new one (this is for the random name generator)
                generateUniqueUsername(generateRandomUser()); // If the username is already taken, generate a new one (this is for the user function)
                generateUniqueUsername(generateFormalName()); // If the username is already taken, generate a new one (this is for the formal name generator)
                generateUniqueUsername(generateProName()); // If the username is already taken, generate a new one (this is for the profession name generator)
                generateUniqueUsername(generateUniquePro()); // If the username is already taken, generate a new one (this is for the unique profession name function)
        } 
        else {
            return username; // Return the username if it's not in the existing usernames array
        }
    }
    
        

    
// All Outputs

// Outputs a random username consisting of an string "User", a random number(1-100), even number (from 2-100) and odd number (from 1-100) 20 times
// console.log(generateRandomName());

// // Outputs a random username that starts with "user" and ends with random numbers
// console.log(generateRandomUser());

// // Outputs a random username consisting of an adjective and a noun
// console.log(generateFormalName());

// // Outputs a random username consisting of an adjective and a profession
// console.log(generateProName());

// // Outputs a random username consisting of an adjective, a profession
// console.log(generateUniquePro());

// // Testing the unique username generation (randomname)
// console.log(generateUniqueUsername(generateRandomName()));

// // Testing the unique username generation (user)
// console.log(generateUniqueUsername(generateRandomUser()));

// // Testing the unique username generation (formal)
// console.log(generateUniqueUsername(generateFormalName()));

// // Testing the unique username generation (profession)
// console.log(generateUniqueUsername(generateProName()));



// All Exports

// Export the functions so they can be used in other files
module.exports = {
    generateRandomName,
    generateRandomUser,
    generateFormalName,
    generateProName,
    generateUniquePro,
    generateUniqueUsername
};