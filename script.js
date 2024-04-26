if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  document.body.classList.add("preloader");

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("preloader");

      AOS.init();
    }, 3500);
  });
}
