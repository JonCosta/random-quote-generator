$(function() {

    $('[data-toggle="tooltip"]').tooltip();

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
            $("#quote > h2").html(quote.phrase);
            $("#quote > h3").html("- "+ quote.author);
            $(".my-twitter").attr("href", "https://twitter.com/intent/tweet?text="+ (quote.phrase+ ' - ' + quote.author).replace(' ', '%20'));
        })
    }

});