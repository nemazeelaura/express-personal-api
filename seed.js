// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_quote = {quote: 'Not my circus, not my monkeys.', author:'Polish Proverb'};

db.Quote.create(new_quote, function(err, campsite){
  if (err){
    return console.log('Error:', err);
  }

  console.log('Created new quote', quote._id)
  process.exit(); // we're all done! Exit the program.
});
