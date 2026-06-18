(function (window, document) {
  var loaded = false;

  function loadGoogleAnalytics() {
    var ga4Id = window.SOWL_GA4_ID;

    if (ga4Id) {
      var gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src =
        "https://www.googletagmanager.com/gtag/js?id=" +
        encodeURIComponent(ga4Id);
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function () {
          window.dataLayer.push(arguments);
        };
      window.gtag("js", new Date());
      window.gtag("config", ga4Id, { anonymize_ip: true });
      return;
    }

    window.GoogleAnalyticsObject = "ga";
    window.ga =
      window.ga ||
      function () {
        (window.ga.q = window.ga.q || []).push(arguments);
      };
    window.ga.l = 1 * new Date();

    var gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.google-analytics.com/analytics.js";
    gaScript.onload = function () {
      window.ga("create", "UA-80184128-1", "auto");
      window.ga("send", "pageview");
    };
    document.head.appendChild(gaScript);
  }

  function loadAnalytics() {
    if (loaded) {
      return;
    }
    loaded = true;

    ["scroll", "click", "touchstart", "keydown"].forEach(function (eventName) {
      window.removeEventListener(eventName, loadAnalytics, true);
    });

    loadGoogleAnalytics();

    window.yandex_metrika_callbacks = window.yandex_metrika_callbacks || [];
    window.yandex_metrika_callbacks.push(function () {
      try {
        window.yaCounter38548030 = new Ya.Metrika({
          id: 38548030,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
        });
      } catch (e) {}
    });

    var ymScript = document.createElement("script");
    ymScript.async = true;
    ymScript.src = "https://mc.yandex.ru/metrika/watch.js";
    document.head.appendChild(ymScript);
  }

  ["scroll", "click", "touchstart", "keydown"].forEach(function (eventName) {
    window.addEventListener(eventName, loadAnalytics, {
      passive: true,
      capture: true,
    });
  });
})(window, document);
