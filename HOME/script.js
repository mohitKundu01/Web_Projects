const Img_1 = [
  {
    URL1: "../Image_Home/Box_1_1.webp",
    URL2: "../Image_Home/Box_2_1.webp",
    URL3: "../Image_Home/Box_3_1.webp",
    URL4: "../Image_Home/Box_4_1.webp",
    URL5: "../Image_Home/Box_5_1.webp",
  },
  {
    URL1: "../Image_Home/Box_1_2.webp",
    URL2: "../Image_Home/Box_2_2.webp",
    URL3: "../Image_Home/Box_3_2.webp",
    URL4: "../Image_Home/Box_4_2.webp",
    URL5: "../Image_Home/Box_5_2.webp",
  },
  {
    URL1: "../Image_Home/Box_1_3.webp",
    URL2: "../Image_Home/Box_2_3.webp",
    URL3: "../Image_Home/Box_3_3.webp",
    URL4: "../Image_Home/Box_4_3.webp",
    URL5: "../Image_Home/Box_5_3.webp",
  },
  {
    URL1: "../Image_Home/Box_1_4.jpg",
    URL2: "../Image_Home/Box_2_4.webp",
    URL3: "../Image_Home/Box_3_4.webp",
    URL4: "../Image_Home/Box_4_4.webp",
    URL5: "../Image_Home/Box_5_4.webp",
  },
  {
    URL1: "../Image_Home/Box_1_1.webp",
    URL2: "../Image_Home/Box_2_2.webp",
    URL3: "../Image_Home/Box_3_5.webp",
    URL4: "../Image_Home/Box_4_1.webp",
    URL5: "../Image_Home/Box_5_5.webp",
  },
];

const Images = document.querySelectorAll(".img");

const URL = ["URL1", "URL2", "URL3", "URL4", "URL5"];
let Idx = 0;
function ChangeHandler() {
  Images.forEach((target, index) => {
    target.style.background = `url("${Img_1[Idx][URL[index]]}") left top/cover`;
  });
  Idx++;
  if (Idx > 4) {
    Idx = 0;
  }
}

setInterval(ChangeHandler, 4000);
