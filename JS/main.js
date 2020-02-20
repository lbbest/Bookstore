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
    bookTitle.innerText = apiData.books[i].title.toUpperCase();
    flipcardback.appendChild(bookTitle);
    // Insert p for description
    let bookDescription = document.createElement("p");
    bookDescription.classList.add("book-description");
    bookDescription.innerText = apiData.books[i].description;
    flipcardback.appendChild(bookDescription);
    // Insert button for moreinfo with detail anchor
    let detail = `<a href="${apiData.books[i].detail}" data-fancybox><button>More Info</button></a>`;
    let moreInfo = document.createElement("div");
    moreInfo.classList.add("more-info-btn");
    moreInfo.innerHTML = detail;
    flipcardback.appendChild(moreInfo);
  }
}

// Function for search bar
function searchBar() {
  let searchbar = document.getElementById("searchbar");
  let value = searchbar.value.toUpperCase();
  let container = document.getElementById("flip-card-container");
  let cards = container.getElementsByClassName("flip-card");

  for (i = 0; i < cards.length; i++) {
    let title = cards[i].textContent.toUpperCase();
    if (title.includes(value)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
