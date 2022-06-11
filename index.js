const chartContainer = document.querySelector(".chart-container");
const btnStop = document.querySelector("#btn-stop");

btnStop.addEventListener("click", function () {
  clearInterval(chartInterval);
});


let chartInterval = setInterval(function generateChart() {
  const str = document.querySelector("#input").value;

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

    if (chartContainer.childElementCount <= str) {
      chartContainer.innerHTML += `<li style="background-color: ${color}; height: ${randomNumber}px; padding: 7px" >${randomNumber}</li>`;
    } else {
      chartContainer.innerHTML = null;
    }
  }
}, 3000);
