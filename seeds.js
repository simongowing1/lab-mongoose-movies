const mongoose = require('mongoose')
const Celebrity = require("./models/Celebrity");

mongoose.connect('mongodb://localhost/library', {
  userNewUrlParser: true
});

const celebrities = [
  {
    name: "Adam Scott",
    occupation:
      "Actor (Ben Wyatt on Parks and Recreation, Henry Pollard on Party Down)",
    catchPhrase: "When Robert turns on his A game, he's as good as anyone in the world. It's a class field, but he's right up there with the best.",
  },
  {
    name: "Charlie Sheen",
    occupation:
      "Actor (Ricky 'Wild Thing' Vaughn in Major League, Charlie Harper on Two and a Half Men)",
    catchPhrase: "Duh, Winning.",
  },
  {
    name: "Jessica Biel",
    occupation:
      "Actress (Mary Camden on 7th Heaven)",
    catchPhrase: "I think I соuld drink mу own blооd. Iѕ that weird?",
  }
];

Celebrity.create(celebrities)
  .then(celebrities => {
    console.log(`Success! Added ${celebrities.length} celebrities to the database.`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });