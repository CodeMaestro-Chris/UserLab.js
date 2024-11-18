const fs = require("fs")


// An array of numbers from 1 to 100
const numberArray = Array.from({ length: 100}, (_, i) => i + 1);

// An array of numbers from 1 to 20
const numberArrayTo20 = Array.from({ length: 20 }, (_, i) => i + 1);  // 21 to 40

// An array of even
const evenNumbers = Array.from({ length: 50 }, (_, i) => i * 2 + 2); 

// An array of odd numbers
const oddNumbers = numberArray.filter(number => number % 2 !== 0); 

// An array of username (nouns)
const userNouns = [
    "Partner", "Guest", "Supporter", "Patron", "Advocate",
    "Friend", "Client", "Buddy", "Benefactor", "Member",
    "Collaborator", "Champion", "Hero", "Contributor", "Captain",
    "VIP", "Explorer", "Enthusiast", "Guide", "Pioneer",
    "Investor", "Advisor", "Specialist", "Innovator", "Seniorman",
    "Chief", "Investor", "Mover", "Shaker", "Creator",
    "Bigman", "Leader", "Influencer", "Customer", "Odogwu",
    "Hero", "Expert", "Ambassador", "Achiever", "Fan",
    "Patron", "Sponsor", "Champ", "User", "Oga",
    "Chairman", "Boss", "Seeker", "Searcher", "Legend"
];

// An array of username (adjectives)
const userAdjectives = [
    "Valued", "Loyal", "Esteemed", "Honored", "Appreciated",
    "Dedicated", "Incredible", "Trusted", "Cherished", "Exceptional",
    "Wonderful", "Outstanding", "Treasured", "Amazing", "Respected",
    "Dependable", "Reliable", "Inspiring", "Dynamic", "Admirable",
    "Impressive", "Unique", "Creative", "Supportive", "Generous",
    "Remarkable", "Appreciative", "Influential", "Innovative", "Ambitious",
    "Resourceful", "Dedicated", "Brilliant", "Motivated", "Courageous",
    "Driven", "Skilled", "Talented", "Hardworking", "Visionary",
    "Grateful", "Proactive", "Focused", "Patient", "Empowered"
];

// Generate a random username
function generateRandom() {
    const randomNoun = userNouns[Math.floor(Math.random() * userNouns.length)];
    const randomAdjective = userAdjectives[Math.floor(Math.random() * userAdjectives.length)];
    const randomNumberTo20 = numberArrayTo20[Math.floor(Math.random() * numberArrayTo20.length)];
    const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];  

    return `${randomAdjective}_${randomNoun}${randomNumber}${randomNumberTo20}`;
}

// Function that generates a username that starts with "user" and ends with random numbers
function generateUser() {
    const randomEvenNumber = evenNumbers[Math.floor(Math.random() * evenNumbers.length)];
    const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];  
    const randomOddNumber = oddNumbers[Math.floor(Math.random() * oddNumbers.length)];

    return `User${randomNumber}${randomEvenNumber}${randomOddNumber}`;
}

// Function that ensures that a username is unique
    function generateUniqueUsername(username) {
        const existingUsernames = [...userNouns,...userAdjectives, "user"];
        if (existingUsernames.includes(username)) {
            return generateUniqueUsername(generateRandom());
        } else {
            return username;
        }
    }

    // Function that imports a particular array from the data.json JSON file

    // const fs = require("fs");

    // function importArray(filePath) {
    //     return new Promise((resolve, reject) => {
    //         fs.readFile(filePath, "utf8", (err, data) => {
    //             if (err) {
    //                 reject(err); // Reject the Promise if there's an error
    //             } else {
    //                 resolve(JSON.parse(data)); // Resolve the Promise with parsed JSON data
    //             }
    //         });
    //     });
    // }
    
    // Using the function with data.json
    // importArray("data.json")
    //     .then((userNouns) => {
    //         console.log("Array from data.json:", userNouns);
    //     })
    //     .catch((error) => {
    //         console.error("Error reading data.json:", error.message);
    //     });
    
                
    

    // console.log(generateUser());
    console.log(generateUniqueUsername(generateRandom()));
    // console.log(generateUniqueUsername(generateUser()));
    // // console.log(readArray());




    // Read the JSON file
    // fs.readFile('data.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error('Error reading the file:', err);
    //         return;
    //     }
    
    //     // Parse the JSON data
    //     const jsonData = JSON.parse(data);
    //     const nouns = jsonData.userNouns;
    //     const adjectives = jsonData.userAdjectives;
    
        

        // A function that concatenates the two array items
    //     function generateRandom() {
    //     // Get a random item from the array
    //     const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    //     const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    //     // const randomUsername = `${randomAdjective}_${randomNoun}`;
    //     const randomNumberTo20 = numberArrayTo20[Math.floor(Math.random() * numberArrayTo20.length)];
    //     const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];  
    
    //     return 
    // }
    // });

        // Output the random item
        // console.log(concatenateItems(randomAdjective, randomNoun));
    
    console.log(generateUser());


// Export the functions so they can be used in other files
module.exports = {
    numberArray,
    oddNumbers,
    evenNumbers,
    generateRandom,
    generateUser,
    generateUniqueUsername
};