// Night mode toggle. An explicit choice is remembered; otherwise the page follows the OS setting.
// The initial theme is applied by the inline script in _includes/head.html to avoid a flash.
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var theme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = theme;
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {}
    });
  }

  prefersDark.addEventListener("change", function (event) {
    if (!savedTheme()) {
      root.dataset.theme = event.matches ? "dark" : "light";
    }
  });
})();
