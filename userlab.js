// An array of numbers from 1 to 100
const numberArray = Array.from({ length: 100}, (_, i) => i + 1);

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
function generateUsername() {
    const randomNoun = userNouns[Math.floor(Math.random() * userNouns.length)];
    const randomAdjective = userAdjectives[Math.floor(Math.random() * userAdjectives.length)];
    const randomEvenNumber = evenNumbers[Math.floor(Math.random() * evenNumbers.length)];
    const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];  

    return `${randomAdjective}_${randomNoun}${randomNumber}${randomEvenNumber}`;
}

console.log(userAdjectives);
console.log(userNouns);
console.log(numberArray);
console.log(evenNumbers);
// Generate 5 random usernames
for (let i = 0; i < 5; i++) { 
    console.log(generateUsername());
}