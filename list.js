const names = [
    "Steve",
    "John",
    "Jimmy",
    "Bob",
    "Ron",
    "Harry",
    "Ann",
    "Mel",
    "Alice",
    "Jack",
    "Sam",
    "Maria",
    "Mark",
    "Adele",
    "Billy",
    "Calvin",
    "jay",
    "Christina",
    "Ambur",
    "Winny",
    "Wilow",
    "Vikky",
    "Shane",
    "Scarlet",
    "Rea",
    "Luke",
    "Lois",
    "Jojo",
    "Ema",
    "Arden",
    "Agatha",
    "Grace",
    "Rocky",
    "Ricky",
    "Sophia",
    "Tina",
    "Lily",
    "Linda",
    "Emalee",
];

const domains = [
    "google.com",
    "yahoo.com",
    "nothing.com",
    "coin.com",
    "flutter.org",
    "w3schools.com",
    "w3.org",
    "microsoft.com",
    "vscode.com",
    "github.com",
    "lookcool.com",
    "mailsite.io",
    "potter.com",
    "droid.com",
    "mail1.com",
    "mail.com",
    "mail.net",
    "mail.org",
    "mail.net",
    "techworld.app",
    "techworld.com",
    "apple.com",
    "google.co.in",
    "google.co.uk",
];

const animals = [
    "spider",
    "lion",
    "tiger",
    "lizard",
    "panda",
    "deer",
    "wolf",
    "forg",
    "bear",
    "bull",
    "cow",
    "doe",
    "alligator",
    "leopard",
    "hamster",
    "donkey",
    "armadillo"
];

const birds = [
    "crow",
    "eagles",
    "swan",
    "hummingbird",
    "kiwi",
    "moa",
    "falcon",
    "dodo",
    "cuckoo",
    "vulture",
    "barbet",
    "pigeon",
    "peacock",
    "parrot",
    "sparrow",
    "dove",
    "goose",
    "ostrich",
    "turkey",
    "jay",
    "parakeets",
    "owl"
];

const pick = (arr) => {
    const pic = Math.floor(Math.random() * arr.length);
    return arr[pic];
};

exports.names = names;
exports.birds = birds;
exports.animals = animals;
exports.domains = domains;
exports.pick = pick;