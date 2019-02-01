/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
/*** 
 These are the quotes that will appear on the screen, one at a time, randomly. 
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
  The "getRandomQuote" function generates a random quote from the array of objects above to display on the screen.
***/
function getRandomQuote(quotes){
  var randomQuote = Math.floor(Math.random() * 7);
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
  var passingQuotes = getRandomQuote();
  var html = "";
  html += "<p class="quote">" + [quotes.quote]  + "</p>";
  html += "<p class="source">" + [quotes.source] + "</p>";
if (passingQuotes.citation === ""){
  html += "< span class = "citation">" + passingQuotes.citation + "</span>";
} 

var quoteBox = document.getElementById("quote-box");
quoteBoxDiv.innerHTML = html;
console.log(passingQuote.quote);
};

/*** Can delete this section? I don't remember writing it***/

var quoteBox = document.getElementById("quote-box");
quoteBoxDiv.innerHTML = html;
console.log(passingQuote.quote);
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.