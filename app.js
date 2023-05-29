// sticky往下滑才有陰影
let nav = document.querySelector("nav");

// 可以在f12看內容
// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// })

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0 10px 6px -6px #777";
  }
});
