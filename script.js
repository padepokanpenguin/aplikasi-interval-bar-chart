// const numberContainer = document.querySelector(".chart-container");
// const button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//   clickMe();
// });

// function clickMe(str) {
//   // const str = document.querySelector("#input").value;

//   const temp = [];

//   for (let i = 0; i < str; i++) {
//     const randomNumber = parseInt(Math.random() * 100);

//     temp.push(randomNumber);

//     // numberContainer.innerHTML += `<li>${randomNumber}</li>`;
//   }

//   console.log(temp);
// }

const emails = [];

for (let i = 0; i <= 5; i++) {
  emails.push(Math.random());
}

const send = (email) =>
  new Promise((resolve) => setInterval(() => resolve(email), 1000));
const sendAllEmails = async () => {
  for (email of emails) {
    const emailInfo = await send(email);
    console.log(`Mail sent to ${emailInfo}`);
  }
  console.log("All emails were sent");
};
sendAllEmails();
