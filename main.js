const sharePopupEl = document.querySelector(".author__info__share-popup");
const shareShowBtnEl = document.querySelectorAll(".author__info__share-btn")[0];
const shareHideBtnEl = document.querySelectorAll(".author__info__share-btn")[1];

const showSharePopup = false;

const showPopup = () => {
  sharePopupEl.classList.add("author__info__share-popup--show");
  sharePopupEl.classList.remove("author__info__share-popup--hide");
  shareShowBtnEl.classList.remove("author__info__share-btn--light");
  shareShowBtnEl.classList.add("author__info__share-btn--dark");
};

const hidePopup = () => {
  sharePopupEl.classList.add("author__info__share-popup--hide");
  sharePopupEl.classList.remove("author__info__share-popup--show");
  shareShowBtnEl.classList.remove("author__info__share-btn--dark");
  shareShowBtnEl.classList.add("author__info__share-btn--light");
};

if (showSharePopup) {
  showPopup();
} else {
  hidePopup();
}

shareShowBtnEl.addEventListener("click", showPopup);

shareHideBtnEl.addEventListener("click", hidePopup);

document.addEventListener("click", (e) => {
  if (!sharePopupEl.contains(e.target) && !shareShowBtnEl.contains(e.target)) {
    hidePopup();
  }
});
