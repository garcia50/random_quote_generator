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
    year: "1913",
    tag: "Inspirational"
  },
    
  {
    quote: "I don't always test my code, but when I do I do it in production.",
    source: "Mr. Dos Equis",
    citation: "The Internet",
    year: "2018",
    tag: "Humor"
  },
    
  {
    quote: "Chuck Norris counted to infinity... twice",
    source: "Unknown",
    citation: "The Internet",
    tag: "Humor & Inspirational"
  },

  {
    quote: "Hate does not drive out hate, only love can do that",
    source: "Martin Luther King Jr.",
    citation: "Sermon: Loving Your Enemies",
    year: "1958",
    tag: "Inspirational"
  },

  {
    quote: "It's kinda fun to do the impossible.",
    source: "Walt Disney",
    year: "Mid 1900's",
    tag: "Inspirational"
  },

  {
    quote: "It's Over Anakin! I have the high ground!",
    source: "Obi-Wan",
    tag: "Humor"
  }
];

/***
  Create a random number generator, making sure it only generates a random 
  number up to quote length.
***/
const getRandomNum = () => Math.floor(Math.random() * quotes.length);

/***
  Then create a `getRandomQuote` function to select quote by index using 
  the random number.
***/
const getRandomQuote = (array) => {
  return array[getRandomNum()]  
};
 
/***
  Create a `printQuote` function that calls the `getRandomQuote` function to
  obtain the random quote.
***/
const printQuote = () => {
  const quoteInfo = getRandomQuote(quotes)
  
/***
  Create a `htmlBlock` variable to contain the HTML content that will 
  eventually replace the defaulted quote each time the program is ran. 
***/
  let htmlBlock = `
    <p class="quote">${quoteInfo.quote}</p>
    <p class="source">${quoteInfo.source}`;

/***
  Using conditionals statements, make sure the optional properties exist 
  before they are added to the HTML string.
***/
  if(quoteInfo.citation){
    htmlBlock += `<span class="citation">${quoteInfo.citation}</span>`;
  }
  
  if(quoteInfo.year){
    htmlBlock += `<span class="year">${quoteInfo.year}</span>`;
  }

  if(quoteInfo.tag){
    htmlBlock += `<span class="tag">${quoteInfo.tag}</span></p>`;
  }

  htmlBlock += "</p>";

// Set the `innerHTML` of the `quote-box` div to the `htmlBlock` string. 
  document.getElementById("quote-box").innerHTML = htmlBlock;

// Calls the `changeColor` function with every `click`
  changeColor()
};

// Create a `t` variable to represent the times the `setInterval` method is ran.
let count = 0;
// Create a function that changes both quote and background color.
const changeQuote = () => {
// Using a conditional, the quote and color is changed at the given timed length.
  if ( count == 0 ) {
    setInterval(changeColor, 20000); 
    setInterval(printQuote, 20000); 
  }
  count += 1;
};

var i = 0;
//Create a function that changes and arbitrarily selects background color.
function changeColor() {
  var doc = document.querySelector("body");
  var color = ["purple", "aqua", "lightblue", "lightgreen", "#999", "pink"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

/***
  Add an eventListener to the Show another quote" button that will call the
  `printQuote` function.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

