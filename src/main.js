//
// My first project in node.js!
// This is gonna be a super simple one but
// felt like putting it on the GitHub to show I'm learning
//

const axios = require('axios');

// Fetch a random joke from the API
const getJoke = async () => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = response.data;
    console.log(`${joke.setup}\n${joke.punchline}`);
  } catch (error) {
    console.log('Something happened that idk how to fet *shits pants*');
  }
};

// Run the function to get a joke
getJoke();