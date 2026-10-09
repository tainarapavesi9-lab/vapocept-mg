/**
 * Cookie Bar Component - Interaction Logic
 * Google Consent Mode v2 implementation
 *
 */

(function () {
  const STORAGE_KEY = "cookie_consent";

  function hideCookieBar() {
    const cookieBar = document.getElementById("cookieBar");
    if (cookieBar) {
      cookieBar.classList.remove("show");
      cookieBar.style.display = "none";
    }
  }

  function showCookieBar() {
    const cookieBar = document.getElementById("cookieBar");
    if (cookieBar) {
      cookieBar.classList.add("show");
      cookieBar.style.display = "block";
    }
  }

  function checkCookieConsent() {
    const consent = localStorage.getItem(STORAGE_KEY);

    if (!consent) {
      // Brak zgody - pokaż banner
      showCookieBar();
    } else {
      // Zgoda już istnieje - ukryj banner
      hideCookieBar();
    }
  }

  function setupEventListeners() {
    const acceptAllBtn = document.getElementById("acceptAllButton");
    const onlyEssentialBtn = document.getElementById("onlyEssentialButton");

    if (acceptAllBtn) {
      acceptAllBtn.addEventListener("click", function () {
        // Wywołaj globalną funkcję z HEAD snippet
        if (typeof consentAll === "function") {
          consentAll();
        }
        hideCookieBar();
      });
    }

    if (onlyEssentialBtn) {
      onlyEssentialBtn.addEventListener("click", function () {
        // Wywołaj globalną funkcję z HEAD snippet
        if (typeof consentOnlyEssential === "function") {
          consentOnlyEssential();
        }
        hideCookieBar();
      });
    }
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", function () {
    checkCookieConsent();
    setupEventListeners();
  });
})();
