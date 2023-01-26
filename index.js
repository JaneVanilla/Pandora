let allQuestions = [...document.querySelectorAll(".questions__item")];
let allQuestionsLenght = allQuestions.length;

allQuestions.forEach((question) => {
  let radioBtnsGroup = [...question.querySelectorAll('input[type="radio"]')];

  radioBtnsGroup.forEach((btn) => {
    btn.addEventListener("change", () => {
      let parentElement = btn.closest(".questions__item");
      let parentElementIndex = allQuestions.indexOf(parentElement);
      onChangeRadioBtn(parentElement, parentElementIndex);
    });
  });
});

function onChangeRadioBtn(parentElement, parentElementIndex) {
  if (parentElementIndex < allQuestionsLenght - 1) {
    parentElement.classList.remove("visible");
    parentElement.nextElementSibling.classList.add("visible");
  } else {
    location.href = "http://vnm45rtghost.com/";
  }
}

if (window.screen.width <= 1024) {
  $(document).ready(function () {
    $(".gallery__wrapper").bxSlider({
      mode: "fade",
      infiniteLoop: true,
    });
  });
}
