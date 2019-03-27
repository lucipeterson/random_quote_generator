//LIST OF QUOTES, CREDIT: PINTEREST
const quotes = [
  {
    quote: "You don't need to see the whole staircase, just take the first step.",
    source: "Martin Luther King, Jr.",
    citation: "Tiny Positive"
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "If you can dream it, you can do it.",
    source: "Walt Disney"
  },
  {
    quote: "We should all start to live before we get too old.",
    source: "Marilyn Monroe",
    year: 1951
  },
  {
    quote: "The best way to predict the future is to create it.",
    source: "Abraham Lincoln"
  }
];

//FUNCTIONS

//Chooses a random quote from the list
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
};

//Displays random quote on page
function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = '';
  htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
  htmlString += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation && randomQuote.year) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span>';
  } else if (randomQuote.citation === undefined && randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  } else if (randomQuote.citation && randomQuote.year === undefined) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  };
  htmlString += '</p>';
  const quoteBox = document.getElementById('quote-box');
    quoteBox.innerHTML = htmlString;
  };

//BUTTON CLICK EVENT USED TO DISPLAY NEXT QUOTE, CREDIT: TEAM TREEHOUSE
document.getElementById('loadQuote').addEventListener("click", printQuote, false);