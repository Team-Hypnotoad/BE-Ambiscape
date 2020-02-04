const backgroundSounds = require("./background-sounds");
const randomSounds = require("./random-sounds");

const sounds = [...backgroundSounds, ...randomSounds];

module.exports = sounds;
