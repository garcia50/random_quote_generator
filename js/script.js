/*** 
  Create an array of quote objects and be sure to leave some without 
  the recommended and optional quote objects(citation and/or year)
  to make app more robust. 
***/
const quotes = [
  {
    quote: "Be the change you wish to see in the world.",
    source: "Gandhi",
    citation: "Vol. 13, Ch. 153, page 241",
    year: "1913"
  },
    
  {
    quote: "I don't always test my code, but when I do I do it in production.",
    source: "Mr. Dos Equis",
    citation: "The Internet",
    year: "2018"
  },
    
  {
    quote: "Chuck Norris counted to infinity... twice",
    source: "Unknown",
    citation: "The Internet"
  },

  {
    quote: "Hate does not drive out hate, only love can do that",
    source: "Martin Luther King Jr.",
    citation: "Sermon: Loving Your Enemies",
    year: "1958"
  },

  {
    quote: "It's kinda fun to do the impossible.",
    source: "Walt Disney",
    year: "Mid 1900's"
  },

  {
    quote: "It's Over Anakin! I have the high ground!",
    source: "Obi-Wan"
  }
];

/***
  Create a random number generator, making sure it only generates a random 
  number up to quote length.
***/
const getRandomNum = () => Math.floor(Math.random() * quotes.length);

/***Then create a `getRandomQuote` function to iterate over the quotes and 
  select quote by index using the random number.
***/
/***
  Create a `printQuote` function that calls the `getRandomQuote` function to
  obtain the random quote. Then create a `htmlBlock` variable to contain
  HTML content that will eventually replace the defaulted quote each time the 
  program is ran. Using conditionals statements, make sure the optional 
  properties exist before they are added to the HTML string.
  Finally, set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  Add an eventListener to the Show another quote" button that will call the
  `printQuote function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.