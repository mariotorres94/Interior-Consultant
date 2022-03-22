function aparecer() {
    let iconBurguer = document.getElementById('burguer');
    let iconClose = document.getElementById('close');
    let headerMenu = document.getElementById('header__menu');
    let elementList = document.getElementById('navElement');
    iconBurguer.style.display = 'none';
    iconClose.style.display = 'block';
    elementList.style.display = 'block';
}

function desaparecer() {
    let iconClose = document.getElementById('close');
    let iconBurguer = document.getElementById('burguer');
    let elementList = document.getElementById('navElement');
    iconClose.style.display = 'none';
    iconBurguer.style.display = 'block';
    elementList.style.display = 'none';
}