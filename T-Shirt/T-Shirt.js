let Index = localStorage.getItem("clickedBoxIndex");
console.log(Index);
const arr = [
  {
    URL1: "./Change/asset 8.jpeg",
    URL2: "./Change/asset 9.jpeg",
    URL3: "./Change/asset 10.jpeg",
    URL4: "./Change/asset 11.jpeg",
    URL5: "./Change/asset 12.jpeg",
    text: "Textured Regular Fit Black Pique T-shirt",
    rate: "₹ 899.00",
  },
  {
    URL1: "./Change/Photo_2_1.webp",
    URL2: "./Change/Photo_2_2.webp",
    URL3: "./Change/Photo_2_3.webp",
    URL4: "./Change/Photo_2_4.webp",
    URL5: "./Change/Photo_2_5.webp",
    text: "Smokey Grey Regular Fit T-shirt",
    rate: "₹ 999.00",
  },
  {
    URL1: "./Change/Photo_3_1.webp",
    URL2: "./Change/Photo_3_2.webp",
    URL3: "./Change/Photo_3_3.webp",
    URL4: "./Change/Photo_3_4.webp",
    URL5: "./Change/Photo_3_5.webp",
    text: "Relaxed Fit Men's Dare To Dream Tshirt-Green",
    rate: "₹ 1,100.00",
  },
  {
    URL1: "./Change/Photo_4_1.webp",
    URL2: "./Change/Photo_4_2.webp",
    URL3: "./Change/Photo_4_3.webp",
    URL4: "./Change/Photo_4_4.webp",
    URL5: "./Change/Photo_4_5.webp",
    text: "Midnight Polo Tshirt ",
    rate: "₹ 700.00",
  },
  {
    URL1: "./Change/Photo_5_1.webp",
    URL2: "./Change/Photo_5_2.webp",
    URL3: "./Change/Photo_5_3.webp",
    URL4: "./Change/Photo_5_4.webp",
    URL5: "./Change/Photo_5_5.webp",
    text: "Relaxed Fit Men's Free Spirit Tshirt-Blue",
    rate: "₹ 799.00",
  },
  {
    URL1: "./Change/Photo_6_1.webp",
    URL2: "./Change/Photo_6_2.webp",
    URL3: "./Change/Photo_6_3.webp",
    URL4: "./Change/Photo_6_4.webp",
    // URL4: "./Change/Vide_2.mp4",
    URL5: "./Change/Photo_6_5.webp",
    text: "Off-Grid Polo Tshirt-Blush",
    rate: "₹ 1,200.00",
  },
  {
    URL1: "./Change/Photo_7_1.webp",
    URL2: "./Change/Photo_7_2.webp",
    URL3: "./Change/Photo_7_3.webp",
    URL4: "./Change/Photo_7_4.webp",
    URL5: "./Change/Photo_7_5.webp",
    text: "Oversized SUPIMA T-shirt-Be The Change",
    rate: "₹ 649.00",
  },
  {
    URL1: "./Change/Photo_8_1.webp",
    URL2: "./Change/Photo_8_2.webp",
    URL3: "./Change/Photo_8_3.webp",
    URL4: "./Change/Photo_8_4.webp",
    URL5: "./Change/Photo_8_5.webp",
    text: "Oversized T-shirt-Explorer",
    rate: "₹ 599.00",
  },
  {
    URL1: "./Change/Photo_9_1.webp",
    URL2: "./Change/Photo_9_2.webp",
    URL3: "./Change/Photo_9_3.webp",
    URL4: "./Change/Photo_9_4.webp",
    URL5: "./Change/Photo_9_5.webp",
    text: "Relaxed Free Dream T-shirt",
    rate: "₹ 899.00",
  },
  {
    URL1: "./Change/Photo_10_1.webp",
    URL2: "./Change/Photo_10_2.webp",
    URL3: "./Change/Photo_10_3.webp",
    URL4: "./Change/Photo_10_4.webp",
    URL5: "./Change/Photo_10_5.webp",
    text: "Relaxed Fit Men's Bloop T-shirt",
    rate: "₹ 900.00",
  },
  {
    URL1: "./Change/Photo_11_1.webp",
    URL2: "./Change/Photo_11_2.webp",
    
    URL3: "./Change/Photo_11_3.webp",
    URL4: "./Change/Photo_11_4.webp",
    URL5: "./Change/Photo_11_5.webp",
    text: "Frost White Co-od Set",
    rate: "₹ 1,00.00",
  },
  {
    URL1: "./Change/Photo_12_1.webp",
    URL2: "./Change/Photo_12_2.webp",
    URL3: "./Change/Photo_12_3.webp",
    URL4: "./Change/Photo_12_4.webp",
    URL5: "./Change/Photo_12_5.webp",
    text: "Relaxed Fit Men's Arise Tshirt-Beige",
    rate: "₹ 749.00",
  },
  {
    URL1: "./Change/Photo_13_1.webp",
    URL2: "./Change/Photo_13_2.webp",
    URL3: "./Change/Photo_13_3.webp",
    URL4: "./Change/Photo_13_4.webp",
    URL5: "./Change/Photo_13_5.webp",
    text: "Steel Grey HeavyWeight Oversized T-shirt",
    rate: "₹ 600.00",
  },
  {
    URL1: "./Change/Photo_14_1.webp",
    URL2: "./Change/Photo_14_2.webp",
    URL3: "./Change/Photo_14_3.webp",
    URL4: "./Change/Photo_14_4.webp",
    URL5: "./Change/Photo_14_5.webp",
    text: "Textured Regular Fit Brown Pique T-shirt",
    rate: "₹ 748.00",
  },
  {
    URL1: "./Change/Photo_15_1.webp",
    URL2: "./Change/Photo_15_2.webp",
    URL3: "./Change/Photo_15_3.webp",
    URL4: "./Change/Photo_15_4.webp",
    URL5: "./Change/Photo_15_5.webp",
    text: "Ultra Soft Regular Fit Maroon T-shirt",
    rate: "₹ 339.00",
  },
  {
    URL1: "./Change/Photo_16_1.webp",
    URL2: "./Change/Photo_16_2.webp",
    URL3: "./Change/Photo_16_3.webp",
    URL4: "./Change/Photo_16_4.webp",
    URL5: "./Change/Photo_16_5.webp",
    text: "Textured Oversized OVRLS T-shirt",
    rate: "₹ 899.00",
  },
];

const Minus = document.querySelector("[minus]");
const Plus = document.querySelector("[plus]");
const Value = document.querySelector("[Count]");

let count = 1;
Plus.addEventListener("click", () => {
  console.log("Change");
  Value.textContent = count;
  count++;
});

Minus.addEventListener("click", () => {
  if (count <= 1) {
    count = 1;
    Value.textContent = count;
  } else {
    Value.textContent = count;
    count--;
  }
});

const Check_Size = document.querySelector(".Check_Size");
const size_boxes = document.querySelectorAll(".box");
size_boxes.forEach((target) => {
  target.addEventListener("click", (event) => {
    let a = event.target.textContent;
    Check_Size.textContent = a;
  });
});

const Side = document.querySelectorAll(".side");
const Main_Photo = document.querySelector(".left");
Main_Photo.style.background = `url("${arr[Index].URL1}") left top/cover`;

function ChangeHandler(a) {
  a.style.border = "2px solid black";
}

const urlMap = ["URL1", "URL2", "URL3", "URL4", "URL5"];
Side.forEach((target, index) => {
  console.log(index);
  let a = urlMap[index];
  target.style.background = `url("${arr[Index][a]}") left top /cover`;
  target.addEventListener("click", (event) => {
    let a = getComputedStyle(event.target).background;
    Main_Photo.style.background = `${a}`;
  });
});

// Main_Photo("click");

// Name and rate
document.addEventListener("DOMContentLoaded", () => {
  const Name = document.querySelector(".Name_Tshirt");
  const Rate = document.querySelector("[Rate]");
  console.log(arr[Index].text);
  console.log(arr[Index].rate);
  Name.textContent = arr[Index].text;
  Rate.textContent = arr[Index].rate;
});

// Cart
const small_img = document.querySelector(".small_img");
const small_name = document.querySelector(".TT");
small_img.style.background = `url("${arr[Index].URL1}") left top /cover`;
small_name.textContent = arr[Index].text;

// BUY btn
const Back = document.querySelector(".hero_section");
const Purchase = document.querySelector("[Purchase]");
console.log(Purchase);
const Seen = document.querySelector("[Seen]");
Purchase.addEventListener("click", (event) => {
  console.log("Clickeeee");
  // console.log(Seen);
  Seen.classList.add("visible");
  Back.classList.add("fade");
});

// Cross SIgn
let cross = document.querySelector("[Cross]");
cross.addEventListener("click", () => {
  //  console.log("Clickeeee");
  // console.log(Seen);
  console.log("Good");
  Seen.classList.remove("visible");
  Back.classList.remove("fade");
});

// Range
const Range = document.querySelector(".range");
const OTP = document.querySelector("[OTP]");
const Move_Back = document.querySelector("[BackArrow]");
const Mobile = document.querySelector(".Mobile_Contact");
const Address = document.querySelector(".Address");
const Payment = document.querySelector(".Payment");
const Save = document.querySelector("[Save]");

let a = 1;
OTP.addEventListener("click", () => {
  let currentValue = parseInt(Range.value);
  if (a) {
    currentValue = 1;
  }
  a = 0;
  let newValue = currentValue * 50;

  newValue = Math.min(newValue, 100);

  Range.value = newValue;

  Mobile.style.display = "none";
  Address.style.display = "contents";
});

Move_Back.addEventListener("click", () => {
  let currentValue = parseInt(Range.value);
  if (a) {
    currentValue = 1;
  }
  a = 0;
  let newValue = currentValue - 50;

  newValue = Math.min(newValue, 100);

  Range.value = newValue;
  if (Range.value == 0) {
    // currentValue = 1;.
    // Range.value = 1;
    a = 1;
  }

  if (currentValue == 100) {
    Address.style.display = "contents";
    Payment.style.display = "none";
  } else if (currentValue == 50) {
    Address.style.display = "none";
    Payment.style.display = "none";
    Mobile.style.display = "contents";
  }
});

Save.addEventListener("click", () => {
  Address.style.display = "none";
  Payment.style.display = "contents";

  let currentValue = parseInt(Range.value);
  if (a) {
    currentValue = 1;
  }
  a = 0;
  let newValue = currentValue * 50;

  newValue = Math.min(newValue, 100);

  Range.value = newValue;
});

//
