const {names, domains, animals, birds} = require("./list")

const pick = (arr) => {
    const pic = Math.floor(Math.random() * arr.length)
    return arr[pic]
};

const username = pick(names);
const domain = pick(domains);
const email = `${username}@${domain}`;
const age = Math.floor(Math.random() * (80 - 10 + 1)) - 1;
const animal = pick(animals)
const bird = pick(birds)

module.exports = {
    username: username,
    domain: domain,
    email: email,
    age: age,
    animal: animal,
    bird: bird
};