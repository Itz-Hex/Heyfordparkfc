(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    // Mobile nav toggle
    var navToggle = document.querySelector("[data-nav-toggle]");
    var navPanel = document.querySelector("[data-nav-panel]");
    var iconOpen = document.querySelector("[data-nav-icon-open]");
    var iconClose = document.querySelector("[data-nav-icon-close]");
    if (navToggle && navPanel) {
      navToggle.addEventListener("click", function () {
        var hidden = navPanel.classList.toggle("hidden");
        if (iconOpen && iconClose) {
          iconOpen.classList.toggle("hidden", !hidden);
          iconClose.classList.toggle("hidden", hidden);
        }
      });
    }

    // Active nav link highlight
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (!page || page === "") page = "index.html";
    document.querySelectorAll("[data-nav-link]").forEach(function (a) {
      var target = a.getAttribute("data-nav-link");
      if (target === page) {
        if (a.dataset.accent === "true") {
          a.classList.add("bg-[#AFDC1C]/30");
        } else {
          a.classList.add("bg-neutral-100", "text-neutral-900");
        }
      }
    });

    // ClubInfo tabs
    var tabButtons = document.querySelectorAll("[data-tab]");
    var tabPanels = document.querySelectorAll("[data-tab-panel]");
    if (tabButtons.length && tabPanels.length) {
      function activate(id) {
        tabButtons.forEach(function (b) {
          var active = b.getAttribute("data-tab") === id;
          b.classList.toggle("bg-neutral-900", active);
          b.classList.toggle("text-white", active);
          b.classList.toggle("bg-neutral-50", !active);
          b.classList.toggle("text-neutral-700", !active);
          var icon = b.querySelector("[data-tab-icon]");
          if (icon) {
            icon.classList.toggle("text-[#AFDC1C]", active);
            icon.classList.toggle("text-[#6b8a0a]", !active);
          }
        });
        tabPanels.forEach(function (p) {
          p.classList.toggle("hidden", p.getAttribute("data-tab-panel") !== id);
        });
        var titleEl = document.querySelector("[data-tab-title]");
        if (titleEl) {
          var btn = document.querySelector('[data-tab="' + id + '"]');
          if (btn) titleEl.textContent = btn.getAttribute("data-tab-label") || titleEl.textContent;
        }
      }
      tabButtons.forEach(function (b) {
        b.addEventListener("click", function () {
          activate(b.getAttribute("data-tab"));
        });
      });
      activate("welfare");
    }

    // Join form
    var joinForm = document.querySelector("[data-join-form]");
    var joinSuccess = document.querySelector("[data-join-success]");
    if (joinForm && joinSuccess) {
      joinForm.addEventListener("submit", function (e) {
        e.preventDefault();
        joinForm.classList.add("hidden");
        joinSuccess.classList.remove("hidden");
      });
    }

    // Contact form
    var contactForm = document.querySelector("[data-contact-form]");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
      });
    }
  });
})();
