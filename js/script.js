/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

const quotes = [
  {
    quote1: [
      {
        quote: "Be the change you wish to see in the world.",
        source: "Gandhi",
        citation: "Vol. 13, Ch. 153, page 241",
        year: "1913"
      }
    ],

    quote2: [
      {
        quote: "I don't always test my code, but when I do I do it in production",
        source: "Mr. Dos Equis",
        citation: "The Internet",
        year: "2015"
      }
    ],

    quote3: [
      {
        quote: "Chuck Norris counted to infinity... twice.",
        source: "Unknown",
        citation: "The Internet",
        year: "2018"
      }
    ],

    quote4: [
      {
        quote: "Hate does not drive out hate, only love can do that",
        source: "Martin Luther King Jr.",
        citation: "Sermon: Loving Your Enemies",
        year: "1958"
      }
    ],

    quote5: [
      {
        quote: "It's kinda fun to do the impossible.",
        source: "Walt Disney",
        citation: "Unknown",
        year: "Mid 1900's"
      }
    ]
  }
]




/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.