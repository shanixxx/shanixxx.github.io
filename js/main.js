// Mobile menu
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.sidebar-overlay');

function openMenu() {
    sidebar.classList.add('sidebar--open');
    overlay.classList.add('sidebar-overlay--visible');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    sidebar.classList.remove('sidebar--open');
    overlay.classList.remove('sidebar-overlay--visible');
    document.body.style.overflow = '';
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('sidebar--open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

if (overlay) {
    overlay.addEventListener('click', closeMenu);
}

document.querySelectorAll('.sidebar__nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Copy code
document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Копировать';
    btn.addEventListener('click', () => {
        const code = pre.querySelector('code')?.textContent || pre.textContent;
        navigator.clipboard.writeText(code).then(() => {
            btn.textContent = 'Готово';
            setTimeout(() => btn.textContent = 'Копировать', 1500);
        });
    });
    pre.appendChild(btn);
});

// Scroll to top
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-top';
scrollBtn.setAttribute('aria-label', 'Наверх');
scrollBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('scroll-top--visible', window.scrollY > 400);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
