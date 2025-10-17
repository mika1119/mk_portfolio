document.addEventListener("DOMContentLoaded", function() {
  // page top fixed
  const topBtn = document.getElementById("pageTop");
  const footer = document.getElementById("footer");

  const updatePageTop = () => {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (window.scrollY > 200) {
      topBtn.classList.add("is-visible");
    } else {
      topBtn.classList.remove("is-visible");
    }

    if (footerRect.top < windowHeight - 20) {
      topBtn.style.bottom = windowHeight - footerRect.top + 20 + "px";
    } else {
      topBtn.style.position = "fixed";
      topBtn.style.bottom = "20px";
    }
  };

  // リロード時に実行
  updatePageTop();

  // スクロール時に実行
  window.addEventListener("scroll", updatePageTop);

  topBtn.addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
  });
});
