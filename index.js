const {names, domains, animals, birds, pick} = require("./list");

const username = pick(names);
const domain = pick(domains);
const email = `${username}@${domain}`;
const age = Math.floor(Math.random() * 80);
const animal = pick(animals);
const bird = pick(birds);

module.exports = {
    username: username,
    domain: domain,
    email: email,
    age: age,
    animal: animal,
    bird: bird
};