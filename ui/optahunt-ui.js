document.addEventListener('DOMContentLoaded', () => {
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

    function setActiveView(viewName) {
        // 1. Clear all active classes from tabs and buttons
        Object.values(tabs).forEach(t => t.classList.remove('active'));
        // 2. Clear all active classes from views
        Object.values(views).forEach(v => v.classList.remove('active'));

        // 3. Set the clicked one active
        tabs[viewName].classList.add('active');
        views[viewName].classList.add('active');
    }

    // Click Listeners
    tabs.general.addEventListener('click', () => setActiveView('general'));
    tabs.branding.addEventListener('click', () => setActiveView('branding'));
    tabs.profile.addEventListener('click', () => setActiveView('profile'));

    // Auth Actions
    document.querySelector('[data-optahunt-ui="login"]').addEventListener('click', () => {
        window.open('https://optahunt.com/login', '_blank');
    });
    document.querySelector('[data-optahunt-ui="signup"]').addEventListener('click', () => {
        window.open('https://optahunt.com/account/signup', '_blank');
    });
});
