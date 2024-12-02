const loginBtn = document.getElementById('login-btn');
const hoverLogo = document.getElementById('hover-logo');

loginBtn.addEventListener('mouseover', (e) => {
    hoverLogo.style.display = 'block';
    hoverLogo.style.left = `${e.pageX}px`;
    hoverLogo.style.top = `${e.pageY}px`;
});

loginBtn.addEventListener('mousemove', (e) => {
    hoverLogo.style.left = `${e.pageX}px`;
    hoverLogo.style.top = `${e.pageY}px`;
});

loginBtn.addEventListener('mouseout', () => {
    hoverLogo.style.display = 'none';
});
