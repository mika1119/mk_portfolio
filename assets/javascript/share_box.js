document.addEventListener("DOMContentLoaded", function() {
  // share box fixed
  const shareBtn = document.getElementById("shareBox");
  const footer = document.getElementById("footer");

  window.addEventListener("scroll", () => {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (window.scrollY > 200) {
      shareBtn.classList.add("is-visible");
    } else {
      shareBtn.classList.remove("is-visible");
    }

    if (footerRect.top < windowHeight - 20) {
      shareBtn.style.bottom = windowHeight - footerRect.top + 20 + "px";
    } else {
      shareBtn.style.position = "fixed";
      shareBtn.style.bottom = "20px";
    }
  });

  shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("is-open");
  });
});
