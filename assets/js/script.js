$(function() {

    var currentQuote = "";

    $('[data-toggle="tooltip"]').tooltip();

    // Generates when the the page is loaded
    randomQuote();

    // Collects a new quote after pressing the button
    $("#quoteBtn").click(function() {
        $("#quote").fadeOut(500, function() {
            randomQuote();
            $("#quote").fadeIn(500);
        });
    });

    $("#tweetBtn").click(function() {
        window.open("https://twitter.com/intent/tweet?text="+ currentQuote.replace(" ", "%20"), "", "width=700,height=300");
    });

    function randomQuote() {
        
        $.getJSON("./assets/js/quotes.json", function(data) {
            var id = Math.floor((Math.random() * data.quotes.length));
            var quote = data.quotes[id];
            $("#quote > h2").html(quote.phrase);
            $("#quote > h3").html("- "+ quote.author);
            currentQuote = quote.phrase+ ' - ' + quote.author;
            // $("#quote").fadeIn(1000);
        });
    }

});