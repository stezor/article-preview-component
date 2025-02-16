const sharePopupEl = document.querySelector(
  ".article-component__text__author__info__share-popup"
);
const shareShowBtnEl = document.querySelector(
  ".article-component__text__author__info__share-btn--light"
);
const shareHideBtnEl = document.querySelector(
  ".article-component__text__author__info__share-btn--dark"
);

const showSharePopup = false;

const showPopup = () => {
  sharePopupEl.classList.add(
    "article-component__text__author__info__share-popup--show"
  );
  sharePopupEl.classList.remove(
    "article-component__text__author__info__share-popup--hide"
  );
};

const hidePopup = () => {
  sharePopupEl.classList.add(
    "article-component__text__author__info__share-popup--hide"
  );
  sharePopupEl.classList.remove(
    "article-component__text__author__info__share-popup--show"
  );
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
