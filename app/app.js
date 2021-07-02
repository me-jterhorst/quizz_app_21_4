const BOOKMARKS = Array.from(document.querySelectorAll(".bookmark"));
const SHOW_ANSWER_BTN = Array.from(
  document.querySelectorAll(".content-card__btn")
);
const DARK_TOGGLE = document.querySelector(".dark-mode-toggle");
const LIGHT_BULB = document.querySelector(".light");
const FORM = document.querySelector("form");

let formArray = [];

BOOKMARKS.forEach((bookmark) => {
  bookmark.addEventListener("click", (event) => {
    event.target.classList.toggle("bookmarked");
  });
});

SHOW_ANSWER_BTN.forEach((answer_btn) => {
  answer_btn.addEventListener("click", (event) => {
    event.preventDefault();
    const ANSWER = event.target.nextElementSibling;
    console.log(ANSWER);
    if (event.target.textContent === "Show Answer") {
      event.target.textContent = "Hide Answer";
      ANSWER.classList.remove("hidden");
    } else {
      event.target.textContent = "Show Answer";
      ANSWER.classList.add("hidden");
    }
  });
});

if (DARK_TOGGLE) {
  // DARK MODE
  DARK_TOGGLE.addEventListener("click", (event) => {
    const BODY = document.querySelector("body");
    const PARAGRAPH = document.querySelectorAll("p");
    const SUBHEADLINE = document.querySelectorAll("h3");
    const MESSAGE = document.querySelector(".dark-mode-toggle__message");
    LIGHT_BULB.classList.toggle("dark-mode");
    MESSAGE.classList.toggle("dark-mode");
    BODY.classList.toggle("dark-mode-bg");
    PARAGRAPH.forEach((p) => {
      p.classList.toggle("dark-mode-txt");
    });
    SUBHEADLINE.forEach((sub) => {
      sub.classList.toggle("dark-mode-txt");
    });

    if (LIGHT_BULB.classList.contains("dark-mode")) {
      MESSAGE.textContent = "on";
      SUBHEADLINE.forEach((sub) => {
        sub.style.textDecoration = "underline";
      });
    } else {
      MESSAGE.textContent = "off";
      SUBHEADLINE.forEach((sub) => {
        sub.style.textDecoration = "none";
      });
    }
  });
}
FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  let question = document.querySelector("#create__question");
  let answer = document.querySelector("#create__answer");
  let tags = document.querySelector("#create__tags").value;

  let tagList = tags.split(",");

  let obj = {
    question: question.value,
    answer: answer.value,
    tags: tagList,
  };
  formArray.push(obj);
  console.log(formArray);
  FORM.reset();
});
