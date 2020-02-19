function ajaxCallData(url) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      generateFlipCards(data);
    });
}

ajaxCallData("https://api.myjson.com/bins/zyv02");

function generateFlipCards(apiData) {
  let container = document.getElementById("flip-card-container");
  console.log(container);
  console.log(apiData);
  for (i = 0; i < apiData.books.length; i++) {
    // Create new flip card
    let flipcard = document.createElement("div");
    flipcard.classList.add("flip-card");
    container.appendChild(flipcard);
    // Create flip card inner container
    let flipcardinner = document.createElement("div");
    flipcardinner.classList.add("flip-card-inner");
    flipcard.appendChild(flipcardinner);
    // Create flip card front
    let flipcardfront = document.createElement("div");
    flipcardfront.classList.add("flip-card-front");
    flipcardinner.appendChild(flipcardfront);
    // Insert book image to fill flipcardfront
    let bookCover = document.createElement("img");
    bookCover.classList.add("book-cover");
    flipcardfront.appendChild(bookCover);
    bookCover.setAttribute("src", apiData.books[i].cover);
    // Create flip card back
    let flipcardback = document.createElement("div");
    flipcardback.classList.add("flip-card-back");
    flipcardinner.appendChild(flipcardback);
    // Insert h1 for title
    let bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    bookTitle.innerText = apiData.books[i].title;
    flipcardback.appendChild(bookTitle);
    // Insert p for description
    let bookDescription = document.createElement("p");
    bookDescription.classList.add("book-description");
    bookDescription.innerText = apiData.books[i].description;
    flipcardback.appendChild(bookDescription);
    // Insert button for moreinfo
    let moreInfo = document.createElement("button");
    moreInfo.classList.add("more-info-btn");
    moreInfo.innerText = "More Info";
    flipcardback.appendChild(moreInfo);
  }
}

// Turn above element creations into single function that can be called upon

// Create function for opening detail image in overlay window on more info button click

// Create function for searchbar
