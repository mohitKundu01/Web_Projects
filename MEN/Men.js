console.log("Welcome");
const Boxes = document.querySelectorAll(".img");
const arr = [
  {
    URL1: "../Men_Image/asset 10.jpeg",
    URL2: "../Men_Image/asset 11.jpeg",
    text: "Textured Regular Fit Black Pique T-shirt",
    rate: "₹ 799.00",
  },
  {
    URL1: "../Men_Image/asset 14.jpeg",
    URL2: "../Men_Image/asset 15.jpeg",
    text: "Smokey Grey Regular Fit T-shirt",
    rate: "₹ 699.00",
  },
  {
    URL1: "../Men_Image/asset 16.jpeg",
    URL2: "../Men_Image/asset 17.jpeg",
    text: "Relaxed Fit Men's Dare To Dream Tshirt-Green",
    rate: "₹ 799.00",
  },
  {
    URL1: "../Men_Image/asset 52.jpeg",
    URL2: "../Men_Image/asset 53.jpeg",
    text: "Midnight Polo Tshirt ",
    rate: "₹ 899.00",
  },
  {
    URL1: "../Men_Image/asset 29.jpeg",
    URL2: "../Men_Image/asset 28.jpeg",
    text: "Relaxed Fit Men's Free Spirit Tshirt-Blue",
    rate: "₹ 799.00",
  },
  {
    URL1: "../Men_Image/asset 39.jpeg",
    URL2: "../Men_Image/asset 38.jpeg",
    text: "Off-Grid Polo Tshirt-Blush",
    rate: "₹ 899.00",
  },
  {
    URL1: "../Assests/asset 3.jpeg",
    URL2: "../Assests/asset 4.jpeg",
    text: "Oversized SUPIMA T-shirt-Be The Change",
    rate: "₹ 1,199.00",
  },
  {
    URL1: "../Assests/asset 12.jpeg",
    URL2: "../Assests/asset 11.jpeg",
    text: "Oversized T-shirt-Explorer",
    rate: "₹ 899.00",
  },
  {
    URL1: "../Assests/asset 41.jpeg",
    URL2: "../Assests/asset 42.jpeg",
    text: "Relaxed Free Dream T-shirt",
    rate: "₹ 699.00",
  },
  {
    URL1: "../Assests/asset 24.jpeg",
    URL2: "../Assests/asset 23.jpeg",
    text: "Relaxed Fit Men's Bloop T-shirt",
    rate: "₹ 899.00",
  },
  {
    URL1: "../Assests/asset 39.jpeg",
    URL2: "../Assests/asset 40.jpeg",
    text: "Frost White Co-od Set",
    rate: "₹ 1,299.00",
  },
  {
    URL1: "./Men/asset 26.jpeg",
    URL2: "./Men/asset 27.jpeg",
    text: "Relaxed Fit Men's Arise Tshirt-Beige",
    rate: "₹ 800.00",
  },
  {
    URL1: "../Assests/asset 36.jpeg",
    URL2: "../Assests/asset 35.jpeg",
    text: "Steel Grey HeavyWeight Oversized T-shirt",
    rate: "₹ 1002.00",
  },
  {
    URL1: "../Assests/asset 34.jpeg",
    URL2: "../Assests/asset 33.jpeg",
    text: "Textured Regular Fit Brown Pique T-shirt",
    rate: "₹ 799.00",
  },
  {
    URL1: "../Assests/asset 13.jpeg",
    URL2: "../Assests/asset 14.jpeg",
    text: "Ultra Soft Regular Fit Maroon T-shirt",
    rate: "₹ 899.00",
  },
  {
    URL1: "../Assests/asset 1.jpeg",
    URL2: "../Assests/asset 2.jpeg",
    text: "Textured Oversized OVRLS T-shirt",
    rate: "₹ 811.00",
  },
];

const text = document.querySelectorAll("[text]");
text.forEach((target, index) => {
  target.textContent = arr[index].text;
});
console.log(Boxes);
Boxes.forEach((target, index) => {
  // console.log("Index" + index);

  target.style.background = `url("${arr[index].URL1}") left top /cover`;
});

Boxes.forEach((target, index) => {
  target.addEventListener("mouseover", (event) => {
    console.log(index);
    event.target.style.cursor = "pointer";
    event.target.style.background = `url("${arr[index].URL2}") left top /cover`;
  });
});

Boxes.forEach((target, index) => {
  target.addEventListener("mouseout", (event) => {
    console.log("out");
    event.target.style.background = `url("${arr[index].URL1}") left top /cover`;
  });
});

// Detail Page open

Boxes.forEach((target, index) => {
  target.addEventListener("click", (event) => {
    // console.log(index);
    localStorage.setItem("clickedBoxIndex", index);
    window.location.href = "../T-Shirt/T-Shirt.html";
  });
});
