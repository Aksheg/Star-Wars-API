const images = document.querySelectorAll("img");
const detailsContainer = document.querySelector(".details-container");

images.forEach((image, index) => {
  image.addEventListener("click", function main() {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        detailsContainer.innerHTML = `<p>Name: ${data.results[index].name} <br> Gender: ${data.results[index].gender} <br> Height: ${data.results[index].height}cm </p>`;
      })
      .catch((err) => console.log(err));
  });
});

// const APP = {
//   //call the APP.urls.base to see the contents of APP.urls
//   urls: {
//     base: "https://swapi.dev/api/",
//     People: "people/",
//   },
//   init: () => {
//     APP.addListeners();
//     APP.buildNav();
//   },
//   addListeners: () => {
//     let nav = document.getElementById("nav");
//     nav.addEventListener("click", APP.getData);
//     footer.addEventListener("click", APP.getData);
//   },
//   buildNav: () => {
//     let df = new DocumentFragment();
//     for (let nm in APP.urls) {
//       if (nm != "base") {
//         let link = document.createElement("a");
//         link.href = `${APP.urls.base}${APP.urls[nm]}`;
//         link.textContent = nm;
//         link.setAttribute("data-link", `${APP.urls.base}${APP.urls[nm]}`);
//         df.append(link);
//       }
//     }
//     document.getElementById("nav").append(df);
//   },
//   getData: (ev) => {
//     if (ev) ev.preventDefault();
//     //show overlay / loader
//     document.querySelector(".overlay").classList.add("active");
//     //get the url
//     let link = ev.target;
//     let url = link.getAttribute("data-link");
//     //fetch the data
//     fetch(url)
//       .then((resp) => {
//         if (!resp.ok) throw new Error(resp.statusText);
//         return resp.json();
//       })
//       .then(APP.buildList)
//       .catch((err) => {
//         console.error(err);
//         document.querySelector(".overlay").classList.remove("active");
//       });
//     //call the build function
//   },
//   buildList: (data) => {
//     let m = document.getElementById("main");
//     console.log(data);
//     //hide the overlay / loader

//     document.querySelector(".overlay").classList.remove("active");
//     //add the data
//     m.innerHTML = data.results
//       .map((item) => {
//         return (
//           "<li>" +
//           ("Name", item.name) +
//           "<br>" +
//           ("Height", item.height) +
//           "<br>" +
//           ("Gender", item.gender) +
//           "</li>"
//         );
//         let nm = item.name || item.title;
//         return `<p>${nm}</p>`;
//       })
//       .join("...");
//     //add the prev/next navigation
//     let footer = document.getElementById("footer");
//     footer.innerHTML = "";

//     if (data.previous) {
//       //previous link
//       let prev = document.createElement("a");
//       prev.href = data.previous;
//       let url = new URL(data.previous);
//       let labels = url.pathname.split("/");
//       let label = labels[labels.length - 2];
//       prev.textContent = `<< Previous ${label}`;
//       prev.setAttribute("data-link", data.previous);
//       footer.append(prev);
//     }
//     if (data.next) {
//       //next link
//       let next = document.createElement("a");
//       next.href = data.next;
//       let url = new URL(data.next);
//       let labels = url.pathname.split("/");
//       let label = labels[labels.length - 2];
//       next.textContent = `Next ${label} >>`;
//       next.setAttribute("data-link", data.next);
//       footer.append(next);
//     }
//   },
// };

// document.addEventListener("DOMContentLoaded", APP.init);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const starWars = document.getElementById("first_demo");

// function main() {
//   starWars.textContent = "please wait...";
//   fetch("https://swapi.dev/api/people/?format=json")
//     .then((response) => response.json())
//     .then((data) => {
//       starWars.innerHTML = data.results
//         .map((result) => {
//           return (
//             "<li>" +
//             result.name +
//             "<br>" +
//             result.height +
//             "<br>" +
//             result.gender +
//             "</li>"
//           );
//         })
//         .join("");
//     })
//     .catch((error) => console.log(error));
// }
// Window.onload = main();

module.exports = { main };




//  function uniqueCharacterString (str) {
//   for (let i = 0; i < str.length; i++)
//     for (let j = i + 1; j < str.length; j++)
//     if (str[i] == str[j])
//     return false
 
//  return true
//  }
//  console.log(uniqueCharacterString("abcdef"))


//Tuesday Algorithm Assessment
// An ATM only has 100, 50 and 20 dollar bills (USD) available to be dispensed.
// Given an amount between 40 and 10000 dollars (inclusive) and
//assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills
//the ATM needs to dispense(in that order).// Here is the specification for the withdraw method you'll complete:
//// withdraw(amount)
// Parameters
// amount: Number - Amount of money to withdraw.
//Assume that the amount is always divisible into 100, 50 and 20 bills.
//// Return Value
// Array<Number> - An array of 3 integers representing the number of 100, 50 and 20 dollar bills
//needed to complete the withdraw(in that order).
// Constraints
// 40 ≤ amount ≤ 1000
// Examples
// amount   Return Value
// 250  [2,1,0]
// 260  [2,0,3]
// 370  [3,1,1]
//
///** * Determines the minimal number of 100, 50 and 20 dollar bills to dispense.
//* * @param { number } amount - The amount to dispense from the ATM. * @returns { number[] }
//The counts of 100, 50, and 20 dollar bills respectively. * /



// function withdraw (amount) {
//   let result = []
//   let hundred = 0;
//   let fifty = 0;
//   let twenty = 0;

//   while (amount >= 100) {
//   amount -= 100;
//   hundred++
//   }
//   while (amount >= 50) {
//   amount -= 50;
//   fifty++;
//   }
//   while (amount >= 20) {
//   amount -= 20;
//   twenty++;
//   }
//   result.push(hundred, fifty, twenty);
//   return result;
// }

// console.log(withdraw(250));
// console.log(withdraw(260));
// console.log(withdraw(370));
