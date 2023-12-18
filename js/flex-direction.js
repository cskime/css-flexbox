const $flexbox = document.getElementById("flexbox");
const $flexboxContents = document.querySelectorAll(".item");

const $flexDirectionSelect = document.querySelector("#flex-direction select");
$flexDirectionSelect.addEventListener("change", (event) => {
  $flexbox.style.flexDirection = event.target.value;
});

const $flexWrapSelect = document.querySelector("#flex-wrap select");
$flexWrapSelect.addEventListener("change", (event) => {
  $flexbox.style.flexWrap = event.target.value;
});

const $justifyContentSelect = document.querySelector("#justify-content select");
$justifyContentSelect.addEventListener("change", (event) => {
  $flexbox.style.justifyContent = event.target.value;
});
