$(function() {

    // Generates when the the page is loaded
    randomQuote();

    // 
    $("#quoteBtn").click(function() {
        randomQuote();
    });

    function randomQuote() {
        $.getJSON("./assets/js/quotes.json", function(data) {
            var id = Math.floor((Math.random() * data.quotes.length));
            var quote = data.quotes[id];
            $("#quote > h3").html(quote.phrase + " - "+ quote.author);
        })
    }

});