(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-main");

  if (!toggle || !nav) return;

  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

(function () {
  var form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var status = form.querySelector(".form-status");
    if (status) {
      status.hidden = false;
      status.textContent =
        "Thank you — we will respond shortly. For production, connect this form to your email service (e.g. Formspree, Netlify Forms, or your server).";
    }
    form.reset();
  });
})();
