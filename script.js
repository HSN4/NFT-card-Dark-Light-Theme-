let moon = document.querySelector(".moon"),
  sun = document.querySelector(".sun-icon");
console.log(moon);
sun.onclick = function () {
  document.body.classList.add("light-theme");
  moon.style.display = "block";
  sun.style.display = "none";
};
moon.onclick = function () {
  document.body.classList.remove("light-theme");
  moon.style.display = "none";
  sun.style.display = "block";
};
