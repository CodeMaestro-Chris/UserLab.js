NameCreator Library
This library provides utilities for generating various types of usernames. It supports different combinations of adjectives, nouns, professions, and numbers, ensuring flexibility and uniqueness.

Installation
To use this library, install it via npm:

bash
Copy code
npm install username-generator
Features
The library provides multiple methods for generating usernames, including:

Adjective + Noun combinations
Adjective + Profession combinations
User-defined numbers and number ranges
Uniqueness checks to avoid duplication
Methods
1. generateRandomName()
Generates a username consisting of:

A random adjective
A random noun
A random number from 1–100
A random number from 1–20
Return Value: A string representing the generated username.
Example:

javascript
Copy code
const { generateRandomName } = require('username-generator');

console.log(generateRandomName());
// Output: "happy_dog47_18"
2. generateRandomUser()
Generates a username starting with "User", followed by:

A random number from 1–100
A random even number from 2–100
A random odd number from 1–100
Return Value: A string representing the generated username.
Example:

javascript
Copy code
const { generateRandomUser } = require('username-generator');

console.log(generateRandomUser());
// Output: "User34_20_9"
3. generateFormalName()
Generates a username consisting of:

A random adjective
A random noun
Return Value: A string representing the generated username.
Example:

javascript
Copy code
const { generateFormalName } = require('username-generator');

console.log(generateFormalName());
// Output: "brave_hero"
4. generateProName()
Generates a username consisting of:

A random adjective
A random profession
Return Value: A string representing the generated username.
Example:

javascript
Copy code
const { generateProName } = require('username-generator');

console.log(generateProName());
// Output: "creative_engineer"
5. generateUniquePro()
Generates a username consisting of:

A random adjective
A random profession
A random number from 1–100
A random number from 1–20
Return Value: A string representing the generated username.
Example:

javascript
Copy code
const { generateUniquePro } = require('username-generator');

console.log(generateUniquePro());
// Output: "smart_teacher99_12"
6. generateUniqueUsername(username)
Ensures that the provided username is unique by checking it against an existing list of usernames. If the username exists, it generates a new one.

Parameters:

username (string): The username to validate.
Return Value: A unique username as a string.
Example:

javascript
Copy code
const { generateUniqueUsername, generateRandomName } = require('username-generator');

const randomName = generateRandomName();
console.log(generateUniqueUsername(randomName));
// Output: A unique username
Utilities
Data Structure Requirements
The library expects the following arrays to be provided in a data.json file:

Nouns: An array of nouns.
Adjectives: An array of adjectives.
Professions: An array of professions.
Example data.json:

json
Copy code
{
  "Nouns": ["dog", "cat", "hero"],
  "Adjectives": ["brave", "happy", "creative"],
  "Professions": ["engineer", "teacher", "artist"]
}
Customization
You can replace or extend the arrays in data.json to include your own data.

Usage Examples
javascript
Copy code
const {
    generateRandomName,
    generateRandomUser,
    generateFormalName,
    generateProName,
    generateUniquePro,
    generateUniqueUsername
} = require('username-generator');

// Random Name
console.log(generateRandomName()); // Example Output: "happy_dog47_18"

// Random User
console.log(generateRandomUser()); // Example Output: "User34_20_9"

// Formal Name
console.log(generateFormalName()); // Example Output: "brave_hero"

// Profession Name
console.log(generateProName()); // Example Output: "creative_engineer"

// Unique Profession Name
console.log(generateUniquePro()); // Example Output: "smart_teacher99_12"

// Ensuring Unique Username
const randomName = generateRandomName();
console.log(generateUniqueUsername(randomName)); // Output: A unique username
Exports
The library exports the following methods:

generateRandomName
generateRandomUser
generateFormalName
generateProName
generateUniquePro
generateUniqueUsername
License
This library is open-sourced under the MIT License.

Notes
The uniqueness check compares against preloaded arrays; ensure these arrays are managed to reflect actual constraints.
Arrays like Nouns, Adjectives, and Professions should be diverse to improve username variety.