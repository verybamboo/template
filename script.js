function fetchData() {
  fetch("../assets/data.json")
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data.title);
      document.querySelector(".bridge").innerText = response.data.title;
      document.querySelector(".day").innerText = response.data.body;
      document.querySelector(
        ".thebg"
      ).style.background = `url(./assets/${response.data.background})`;
    });
}

fetchData();
