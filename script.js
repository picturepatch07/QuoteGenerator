const quoteText = document.querySelector(".quote-area"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");

//random quote function
function randomQuote(){
    quoteBtn.innerHTML = "Loading Quote.....";
    //fetching random quotes/data from the APi and parsing it into JavaScript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerHTML = "New Quote";
    });
}

copyBtn.addEventListener("click", ()=>{
    //Copying the quote text on copyBtn click
    //WriteText() property writes the specified text string to the system clipbpard
    navigator.clipboard.writeText(quoteText.innerText);
});




quoteBtn.addEventListener("click", randomQuote);
