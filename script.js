$(document).ready(function(){
  var quotes = $('#fade h2');
  var quoteIndex = -1;

  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .delay(1000)
          .fadeIn(2000)
          .delay(1000)
          .fadeOut(2000, showNextQuote);
        }

  showNextQuote();

})






//
// let x = "hello"
// function animateText() {
//
//   let text = document.getElementById('words');
//   $("#words").fadeIn()
// }


// $(document).ready(function() {
//   $('#quotes').innerHTML = "hello";
//   $('#quotes').fadeIn(4000)
// });


// $(document).ready(function(){
//   quotes.forEach(quote => {
//     $("#wordfade").text(quote);
//     $("#wordfade").fadeIn(4000);
//     $("#wordfade").fadeOut(2000);
//   })
// });

// $(document).ready(function(){
//   setTimeout($("#wordfade").text(quotes[2]), 12000);
//   setTimeout($("#wordfade").fadeIn(2000).delay(1000).fadeOut(2000), 12000);
//   setTimeout($("#wordfade").text(quotes[1]), 6000);
//   setTimeout($("#wordfade").fadeIn(2000).delay(1000).fadeOut(2000), 6000);
//   $("#wordfade").text(quotes[0]);
//   $("#wordfade").fadeIn(2000).delay(1000).fadeOut(2000);



  // for (let i = 0; i < quotes.length; i++ ){
  //
  //       $("#wordfade").text(quotes[i]);
  //       console.log($("#wordfade").text())
  //       $("#wordfade").fadeIn(2000).delay(1000).fadeOut(2000);
  //       setInterval(()=> {console.log($("wordfade").text())}, 6000);

      // )$("#wordfade").text(quotes[i]);
      // $("#wordfade").fadeIn(4000).delay(800).fadeOut(2000);
      // if($("#wordfade").fadeOut)






// function fadeFunction() {
//   $("#quotes").innerHTML = "hello";
//   $("#quotes").fadeIn("3000");

  // quotes.forEach(quote => {
  //   $('#quotes').innerHTML = quote;
  //   console.log(.quotes)


// quotes.forEach(quote => {
//   $("#wordfade").text(quote);
//   $("#wordfade").fadeIn(4000);
//   $("#wordfade").fadeOut(4000);
// })








//
// (function() {
//     var quotes = $('.quotes');
//     var quoteIndex = -1;
//
//     function showNextQuote() {
//         ++quoteIndex;
//         quotes.eq(quoteIndex % quotes.length)
//             .delay(1000)
//             .fadeIn(2000)
//             .delay(1000)
//             .fadeOut(2000, showNextQuote);
//     }
//
//     showNextQuote();
// })();
