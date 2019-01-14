/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
var quoteBox = document.getElementById("quote-box");
quoteBoxDiv.innerHTML = html;
console.log(passingQuote.quote);
};

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
var quotes = [
  {quote: "A-a-aye, I'm on vacation every single day 'cause I love my occupation. A-a-aye. I'm on vacation, If you don't like your life, then you should go and change it.",
   source: "The Dirty Heads", 
   citation: "Vacation"},

  {quote: "You can't hurt me, I found peace within myself.",
   source: "Michael Jackson"},

  {quote: "If you get up in the morning and think the future is going to be better, it is a bright day.",
   source: "Elon Musk"},

  {quote: "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer.", 
   source: "Jim Carrey"},

  {quote:"Don't waste your time or time will waste you.", 
   source: "Muse", 
   citation: "Knights of Cydonia"},

   {quote: "It happens for a reason, one can't be mad",
    source: "OutKast",
    citation: "Ms. Jackson"},
   ];



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
function getRandomQuote(quotes){
  var randomQuote = Math.floor(Math.random(quotes[0]) * 7);
  return randomQuote;
};


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote(){
  var passingQuotes = getRandomQuote(quotes);
  var html = "
  <p class="quote"> [quotes.quote] </p>
  <p class="source"> [quotes.source]
</p>"

var quoteBox = document.getElementById("quote-box");
quoteBoxDiv.innerHTML = html;
console.log(passingQuote.quote);
};

function showCitation(passingQuotes){
  var other = "";var quoteBox = document.getElementById("quote-box");
  quoteBoxDiv.innerHTML = html;
  console.log(passingQuote.quote);
  };var quoteBox = document.getElementById("quote-box");
quoteBoxDiv.innerHTML = html;
console.log(passingQuote.quote);
};
  if(passingQuotes.citation){
     other =  "<span class="citation"> [quotes.citation] </span>";
  };
  return other;
};
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.