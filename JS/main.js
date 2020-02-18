function ajaxCallData(url) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}

ajaxCallData("https://api.myjson.com/bins/zyv02");

// BOOK INSERT FUNCTION:
// Loop over object/array using for-in for-of for-each loop (find most suitable)
// Create container div element "flip-card"
// Create flip-card-inner
// Inside flip-card-inner create flip-card-front
// Pull in book image from ajax call to take up flip-card-front
// Inside flip-card-inner create flip-card-back
// Pull in book title and description from ajax call
// Create "more info" button
// Repeat with loop for all books
