// **------------------**
// fade in and out quotes script
$(document).ready(function(){
  var quotes = $('#fade h2');
  var quoteIndex = -1;

  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .delay(1000)
          .fadeIn(2000)
          .delay(3000)
          .fadeOut(2000, showNextQuote);
        }

  showNextQuote();

})

// **------------------**
