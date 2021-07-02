const BOOKMARKS = Array.from(document.querySelectorAll(".bookmark"));
const SHOW_ANSWER_BTN = Array.from(
  document.querySelectorAll(".content-card__btn")
);

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
