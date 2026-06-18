// Mobile menu toggle
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-btn');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar--open');
    });
}

// Close sidebar when clicking a link (mobile)
document.querySelectorAll('.sidebar__nav a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--open');
    });
});

// Copy code blocks
document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Копировать';
    btn.addEventListener('click', () => {
        const code = pre.querySelector('code')?.textContent || pre.textContent;
        navigator.clipboard.writeText(code).then(() => {
            btn.textContent = 'Скопировано!';
            setTimeout(() => btn.textContent = 'Копировать', 1500);
        });
    });
    pre.style.position = 'relative';
    pre.appendChild(btn);
});

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-top';
scrollBtn.innerHTML = '&uarr;';
scrollBtn.setAttribute('aria-label', 'Наверх');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('scroll-top--visible', window.scrollY > 300);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
