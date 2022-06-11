const chartContainer = document.querySelector(".chart-container");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  clearInterval();
});

(function generateChart() {
  const str = document.querySelector("#input").value;

  console.log(str);
  for (let i = 0; i < str; i++) {
    let color;
    const randomNumber = parseInt(Math.random() * 100);

    switch (true) {
      case randomNumber <= 25:
        color = "green";
        break;
      case randomNumber <= 50:
        color = "yellow";
        break;
      case randomNumber <= 75:
        color = "red";
        break;
      default:
        color = "blue";
    }

    // chartContainer.hasChildNodes
    //   ? (button.innerHTML = "stop")
    //   : (button.innerHTML = "generate");

    setInterval(() => {
      if (chartContainer.childElementCount <= str) {
        chartContainer.innerHTML += `<li style="background-color: ${color}; height: ${randomNumber}px; padding: 7px" >${randomNumber}</li>`;
      } else {
        chartContainer.innerHTML = null;
      }
    }, 3000);
  }
})();
