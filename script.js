/*
this fetches information from the data.json file and passes it to the html
*/
function fetchData() {
  fetch("../assets/data.json")
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data.title);
      document.querySelector(".bridgeSavings").innerText = response.data.title;
      document.querySelector(".closed").innerText = response.data.body;
      document.querySelector(
        ".background"
      ).style.background = `url(./assets/${response.data.background})`;
    });
}

fetchData();
