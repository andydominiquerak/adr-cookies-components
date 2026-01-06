(function initOptaHuntUI() {
  // ----------------------------------------
  // ELEMENT LOOKUP
  // ----------------------------------------
  const tabs = {
    general: document.querySelector('[data-optahunt-ui="tab-general"]'),
    branding: document.querySelector('[data-optahunt-ui="tab-branding"]'),
    profile: document.querySelector('[data-optahunt-ui="profile"]')
  };

  const views = {
    general: document.getElementById('view-general'),
    branding: document.getElementById('view-branding'),
    profile: document.getElementById('view-profile')
  };

  const loginBtn  = document.querySelector('[data-optahunt-ui="login"]');
  const signupBtn = document.querySelector('[data-optahunt-ui="signup"]');

  // ----------------------------------------
  // WAIT UNTIL EVERYTHING EXISTS
  // ----------------------------------------
  const allReady =
    Object.values(tabs).every(Boolean) &&
    Object.values(views).every(Boolean) &&
    loginBtn &&
    signupBtn;

  if (!allReady) {
    // Retry until Divhunt injects the HTML
    requestAnimationFrame(initOptaHuntUI);
    return;
  }

  // ----------------------------------------
  // PREVENT DOUBLE INIT (SPA SAFE)
  // ----------------------------------------
  if (window.__optahunt_ui_initialized) return;
  window.__optahunt_ui_initialized = true;

  // ----------------------------------------
  // VIEW SWITCHING
  // ----------------------------------------
  function setActiveView(viewName) {
    Object.values(tabs).forEach(t => t.classList.remove('active'));
    Object.values(views).forEach(v => v.classList.remove('active'));

    tabs[viewName].classList.add('active');
    views[viewName].classList.add('active');
  }

  // ----------------------------------------
  // TAB LISTENERS
  // ----------------------------------------
  tabs.general.addEventListener('click', () => setActiveView('general'));
  tabs.branding.addEventListener('click', () => setActiveView('branding'));
  tabs.profile.addEventListener('click', () => setActiveView('profile'));

  // ----------------------------------------
  // AUTH ACTIONS
  // ----------------------------------------
  loginBtn.addEventListener('click', () => {
    window.open('https://optahunt.com/login', '_blank');
  });

  signupBtn.addEventListener('click', () => {
    window.open('https://optahunt.com/account/signup', '_blank');
  });

})();
