const switcher = document.querySelector("input");

switcher.addEventListener("click", () => {
  const priceBasic = document.querySelector(".priceBasic");
  const pricePro = document.querySelector(".pricePro");
  const priceMaster = document.querySelector(".priceMaster");
  if (switcher.checked == true) {
    priceBasic.innerHTML = `<h1>$49.99</h1>`;
    pricePro.innerHTML = "$69.99";
    priceMaster.innerHTML = "$89.99";
  } else {
    priceBasic.innerHTML = "$19.99";
    pricePro.innerHTML = "$24.99";
    priceMaster.innerHTML = "$39.99";
  }
});
