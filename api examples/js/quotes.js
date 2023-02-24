// // console.log('Kanye Rest API');
// function loadQuotes2() {

// }
// console.log(loadQuotes2)
// // console.log(loadQuotes);wrong

// const loadQuotes = () => {
//     console.log('load Quotes');
// }
// loadQuotes();
// // console.log(loadQuotes); right

const loadQuote = () => {
//   console.log("load quote");
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displaQuote(data));
};
const displaQuote = quote => {
  console.log(quote);
  const quoteContainer = document.getElementById("quote-id");
  console.log(quote);
  quoteContainer.innerHTML = quote.quote;
    
}
loadQuote();
// function displaData(data) {
//     console.log(data);
// }
