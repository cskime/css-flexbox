const $flexbox = document.getElementById("flexbox");
const $flexItems = document.querySelectorAll(".item");
const $flexItemTeal = document.querySelector(".teal");

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

const $alignItemsSelect = document.querySelector("#align-items select");
$alignItemsSelect.addEventListener("change", (event) => {
  $flexbox.style.alignItems = event.target.value;
});

const $alignContentSelect = document.querySelector("#align-content select");
$alignContentSelect.addEventListener("change", (event) => {
  $flexbox.style.alignContent = event.target.value;
});

const $alignSelfSelect = document.querySelector("#align-self select");
$alignSelfSelect.addEventListener("change", (event) => {
  $flexItemTeal.style.alignSelf = event.target.value;
});

const $orderSelect = document.querySelector("#order select");
$orderSelect.addEventListener("change", (event) => {
  $flexItemTeal.style.order = event.target.value;
});

/* Width / Height */

function toggleSize(checked, token) {
  $flexItems.forEach((content) => {
    if (checked) {
      content.classList.add(token);
    } else {
      content.classList.remove(token);
    }
  });
}

function toggleLineThrough(checked, element) {
  const DISABLED_CLASSNAME = "disabled";
  if (checked) {
    element.classList.remove(DISABLED_CLASSNAME);
  } else {
    element.classList.add(DISABLED_CLASSNAME);
  }
}

const WIDTH_PLACEHOLDER_CLASSNAME = "width-placeholder";
const $widthCheckbox = document.getElementById("width-checkbox");
const $widthCheckboxLabel = document.getElementById("width-checkbox-text");
$widthCheckbox.addEventListener("change", (event) => {
  toggleSize(event.target.checked, WIDTH_PLACEHOLDER_CLASSNAME);
  toggleLineThrough(event.target.checked, $widthCheckboxLabel);
});

const HEIGHT_PLACEHOLDER_CLASSNAME = "height-placeholder";
const $heightCheckbox = document.getElementById("height-checkbox");
const $heightCheckboxLabel = document.getElementById("height-checkbox-text");
$heightCheckbox.addEventListener("change", (event) => {
  toggleSize(event.target.checked, HEIGHT_PLACEHOLDER_CLASSNAME);
  toggleLineThrough(event.target.checked, $heightCheckboxLabel);
});
