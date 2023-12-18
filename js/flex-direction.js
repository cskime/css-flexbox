const $flexbox = document.getElementById("flexbox");
const $flexboxContents = document.querySelectorAll(".item");

const $flexDirectionSelect = document.querySelector("#flex-direction select");
$flexDirectionSelect.addEventListener("change", (event) => {
  $flexbox.style.flexDirection = event.target.value;
});
