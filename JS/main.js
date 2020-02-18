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
