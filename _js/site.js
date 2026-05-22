(function () {
  function getCollapseTarget(trigger) {
    var selector =
      trigger.getAttribute("data-target") ||
      trigger.getAttribute("href");
    if (!selector || selector === "#") {
      return null;
    }
    return document.querySelector(selector);
  }

  function setCollapsedState(trigger, isOpen) {
    trigger.classList.toggle("collapsed", !isOpen);
    if (trigger.hasAttribute("aria-expanded")) {
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }

  function closePanel(panel, parent) {
    panel.classList.remove("in");
    var trigger = parent.querySelector(
      '[data-target="#' + panel.id + '"],[href="#' + panel.id + '"]'
    );
    if (trigger) {
      setCollapsedState(trigger, false);
    }
  }

  function initCollapse() {
    document.addEventListener("click", function (event) {
      var trigger = event.target.closest('[data-toggle="collapse"]');
      if (!trigger) {
        return;
      }

      var target = getCollapseTarget(trigger);
      if (!target) {
        return;
      }

      event.preventDefault();

      var parentSelector = trigger.getAttribute("data-parent");
      var isOpen = target.classList.contains("in");

      if (parentSelector) {
        var parent = document.querySelector(parentSelector);
        if (parent) {
          parent.querySelectorAll(".panel-collapse.in").forEach(function (panel) {
            if (panel !== target) {
              closePanel(panel, parent);
            }
          });
        }

        if (isOpen) {
          target.classList.remove("in");
          setCollapsedState(trigger, false);
        } else {
          target.classList.add("in");
          setCollapsedState(trigger, true);
        }
        return;
      }

      target.classList.toggle("in", !isOpen);
      setCollapsedState(trigger, !isOpen);
    });
  }

  function initForms() {
    document.querySelectorAll("#form").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        fetch(form.getAttribute("action") || "mail.php", {
          method: "POST",
          body: new FormData(form),
        })
          .then(function () {
            form.reset();
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          })
          .catch(function () {
            alert("Не удалось отправить заявку. Попробуйте позже или позвоните нам.");
          });
      });
    });
  }

  function initCarousels() {
    document.querySelectorAll(".carousel").forEach(function (carousel) {
      var items = carousel.querySelectorAll(".carousel-inner > .item");
      if (items.length < 2) {
        return;
      }

      var indicators = carousel.querySelectorAll(".carousel-indicators li");
      var index = 0;
      var interval = parseInt(carousel.getAttribute("data-interval"), 10) || 10000;

      function showSlide(nextIndex) {
        items[index].classList.remove("active");
        if (indicators[index]) {
          indicators[index].classList.remove("active");
        }
        index = nextIndex;
        items[index].classList.add("active");
        if (indicators[index]) {
          indicators[index].classList.add("active");
        }
      }

      setInterval(function () {
        showSlide((index + 1) % items.length);
      }, interval);
    });
  }

  initCollapse();
  initForms();
  initCarousels();
})();
